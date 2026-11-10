/** Límites compartidos por el formulario (maxLength) y la API (validación). */
export const CONTACT_LIMITS = { name: 100, email: 254, message: 5000 } as const;

/** Códigos que la API devuelve y el cliente traduce; nunca mensajes internos. */
export type ContactErrorCode = "required" | "invalid" | "not_configured" | "send_failed";
