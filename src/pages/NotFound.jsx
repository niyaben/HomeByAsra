import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-stone)] py-32 text-center">
      <p className="coord-label mb-4">404</p>
      <h1 className="font-display text-4xl mb-6">Page not found.</h1>
      <p className="text-[var(--color-slate)] mb-8">
        This page may have moved, or the development you're looking for hasn't broken ground yet.
      </p>
      <Button to="/" variant="dark">Back to Home</Button>
    </section>
  );
}
