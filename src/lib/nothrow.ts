import { getSelectedText as _getSelectedText } from "@raycast/api"
import { Ok, Err, Result } from 'ts-results-es'


type AnyFunction = (...args: unknown[]) => unknown

function nothrow<T extends AnyFunction>(fn: T): (...args: Parameters<T>) =>
    ReturnType<T> extends Promise<infer U>
    ? Promise<Result<U, unknown>>
    : Result<ReturnType<T>, unknown>
function nothrow<T extends AnyFunction>(fn: T) {
    return (...args: Parameters<T>) => {
        try {
            const result = fn(...args)
            if (result instanceof Promise) {
                return result.then(
                    (value) => Ok(value),
                    (error) => Err(error)
                )
            } else {
                return Ok(result)
            }
        } catch (error) {
            return Err(error)
        }
    }
}

export const getSelectedText = nothrow(_getSelectedText)
