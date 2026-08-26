export type DeviceSyncSession = { id: string; secret: string }

export const favouritesStorageKey = "Thoughtful-keeps-favourites"
export const syncSessionStorageKey = "Thoughtful-keeps-sync-session"
export const deviceNameStorageKey = "Thoughtful-device-display-name"

export function readDeviceSyncSession(): DeviceSyncSession | null {
  try {
    const value = JSON.parse(
      window.localStorage.getItem(syncSessionStorageKey) ?? "null"
    ) as Partial<DeviceSyncSession> | null
    return typeof value?.id === "string" && typeof value.secret === "string"
      ? { id: value.id, secret: value.secret }
      : null
  } catch {
    return null
  }
}
