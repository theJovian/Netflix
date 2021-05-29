
export default function Loading({ src, ...restProps }) {
    return (
        <Spinner>
            <LockBody />
            <Picture src={`/images.users/${src}.png`} />
        </Spinner>
    )
}