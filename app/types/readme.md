## Isi dari folder types ya untuk kumpulan type aja sih

### Contoh:
```ts
export type ApiResponse<T> = {
    success: boolean,
    message: string,
    content?: T | null
    error: object | null
}
```