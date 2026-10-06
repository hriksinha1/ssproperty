'use client'

import { ArrowLeftRight, Heart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'

import type { PropertyRecord } from '@/data/properties'

type Collection = {
  favorites: string[]
  compared: string[]
}

const FAVORITES_KEY = 'ss-property-favorites'
const COMPARE_KEY = 'ss-property-compare'
const emptyCollection: Collection = { favorites: [], compared: [] }
let collectionSnapshot = emptyCollection
let initialized = false
const subscribers = new Set<() => void>()

function readIds(key: string) {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

function readCollection(): Collection {
  return {
    favorites: readIds(FAVORITES_KEY),
    compared: readIds(COMPARE_KEY),
  }
}

function persistCollection(collection: Collection) {
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(collection.favorites))
    window.localStorage.setItem(COMPARE_KEY, JSON.stringify(collection.compared))
  } catch {
    return
  }
}

function notifySubscribers() {
  collectionSnapshot = readCollection()
  initialized = true
  subscribers.forEach((subscriber) => subscriber())
}

function subscribe(subscriber: () => void) {
  subscribers.add(subscriber)
  if (typeof window !== 'undefined' && !initialized) {
    collectionSnapshot = readCollection()
    initialized = true
    window.addEventListener('storage', notifySubscribers)
  }

  return () => subscribers.delete(subscriber)
}

function usePropertyCollection() {
  return useSyncExternalStore(subscribe, () => collectionSnapshot, () => emptyCollection)
}

export function toggleFavorite(id: string) {
  const favorites = collectionSnapshot.favorites.includes(id)
    ? collectionSnapshot.favorites.filter((favoriteId) => favoriteId !== id)
    : [...collectionSnapshot.favorites, id]
  collectionSnapshot = { ...collectionSnapshot, favorites }
  persistCollection(collectionSnapshot)
  subscribers.forEach((subscriber) => subscriber())
}

export function toggleCompare(id: string) {
  const isCompared = collectionSnapshot.compared.includes(id)
  if (!isCompared && collectionSnapshot.compared.length >= 3) return

  const compared = isCompared
    ? collectionSnapshot.compared.filter((comparedId) => comparedId !== id)
    : [...collectionSnapshot.compared, id]
  collectionSnapshot = { ...collectionSnapshot, compared }
  persistCollection(collectionSnapshot)
  subscribers.forEach((subscriber) => subscriber())
}

export function PropertyActions({ property }: { property: PropertyRecord }) {
  const { favorites, compared } = usePropertyCollection()
  const isFavorite = favorites.includes(property.id)
  const isCompared = compared.includes(property.id)
  const compareFull = compared.length >= 3 && !isCompared

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={isFavorite ? `Remove ${property.title} from favourites` : `Save ${property.title} to favourites`}
        aria-pressed={isFavorite}
        title={isFavorite ? 'Remove from favourites' : 'Save to favourites'}
        onClick={() => toggleFavorite(property.id)}
        className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white/90 text-[var(--brand-black)]"
      >
        <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      <button
        type="button"
        aria-label={isCompared ? `Remove ${property.title} from comparison` : `Compare ${property.title}`}
        aria-pressed={isCompared}
        title={compareFull ? 'Comparison is limited to three properties' : isCompared ? 'Remove from comparison' : 'Compare property'}
        disabled={compareFull}
        onClick={() => toggleCompare(property.id)}
        className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white/90 text-[var(--brand-black)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeftRight size={16} />
      </button>
    </div>
  )
}

export function SavedProperties({ properties }: { properties: PropertyRecord[] }) {
  const { favorites } = usePropertyCollection()
  const saved = properties.filter((property) => favorites.includes(property.id))

  if (!saved.length) {
    return (
      <div className="mt-8 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
        <p className="text-base text-[var(--text-secondary)]">No saved properties yet.</p>
        <Link href="/properties" className="mt-5 inline-flex bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
          Browse properties
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {saved.map((property) => (
        <article key={property.id} className="overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
          <Link href={`/properties/${property.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={property.image} alt={property.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{property.locality}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{property.title}</h2>
              <p className="mt-3 text-xl font-semibold">{property.price}</p>
            </div>
          </Link>
          <div className="flex justify-end border-t border-[var(--border-subtle)] p-4">
            <button type="button" onClick={() => toggleFavorite(property.id)} aria-label={`Remove ${property.title} from favourites`} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
              <X size={15} /> Remove
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export function PropertyComparison({ properties }: { properties: PropertyRecord[] }) {
  const { compared } = usePropertyCollection()
  const selected = properties.filter((property) => compared.includes(property.id))

  if (!selected.length) {
    return (
      <div className="mt-8 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
        <p className="text-base text-[var(--text-secondary)]">Choose up to three properties to compare.</p>
        <Link href="/properties" className="mt-5 inline-flex bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
          Find properties
        </Link>
      </div>
    )
  }

  const rows: [string, (property: PropertyRecord) => React.ReactNode][] = [
    ['Price', (property) => property.price],
    ['Location', (property) => property.locality],
    ['Type', (property) => property.category],
    ['Details', (property) => property.meta],
    ['Availability', (property) => property.status],
  ]

  return (
    <div className="mt-8 overflow-x-auto border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr>
            <th scope="col" className="w-36 border-b border-[var(--border-subtle)] p-4 text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">Property</th>
            {selected.map((property) => (
              <th key={property.id} scope="col" className="border-b border-l border-[var(--border-subtle)] p-4 align-top">
                <Link href={`/properties/${property.slug}`} className="text-lg font-semibold">{property.title}</Link>
                <button type="button" onClick={() => toggleCompare(property.id)} aria-label={`Remove ${property.title} from comparison`} className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  <X size={14} /> Remove
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row" className="border-b border-[var(--border-subtle)] p-4 text-sm font-medium text-[var(--text-secondary)]">{label}</th>
              {selected.map((property) => (
                <td key={property.id} className="border-b border-l border-[var(--border-subtle)] p-4 text-sm text-[var(--text-primary)]">{value(property)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}