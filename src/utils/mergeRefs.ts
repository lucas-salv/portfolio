export default function mergeRefs<T = any>(...refs: React.ForwardedRef<T>[]): React.RefCallback<T> {
    return (node: T) => {
        for (const ref of refs) {
            if (ref) {
                if (typeof ref === "function") ref(node)
                if ("current" in ref) ref.current = node
            }
        }
    }
}