export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>© {currentYear} Hannah Gillespie. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
