import { ipcMain, IpcMainInvokeEvent } from 'electron'

interface IPCSuccess<T> {
  success: true
  data: T
}

interface IPCError {
  success: false
  message: string
  code: string
}

export function handleIPC<TArgs = unknown, TResult = unknown>(
  channel: string,
  handler: (event: IpcMainInvokeEvent, args: TArgs) => Promise<TResult>
): void {
  ipcMain.handle(channel, async (event, args: TArgs): Promise<IPCSuccess<TResult> | IPCError> => {
    try {
      const data = await handler(event, args)
      return { success: true, data }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // optional 'code' property safely extracted
        const code = (error as { code?: string }).code ?? 'UNKNOWN'
        return { success: false, message: error.message, code }
      }

      // fallback for non-Error throwables
      return { success: false, message: 'Unknown error', code: 'UNKNOWN' }
    }
  })
}
