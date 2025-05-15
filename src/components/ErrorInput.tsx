export default function ErrorInput({error} :{ error? : string} ) {
  return (
    <>
    {error && <p className="text-error mt-1 text-sm">{error}</p>}
    </>
  )
}