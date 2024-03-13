export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-slate-100 bg-cover">
        {children}
      </div>
    );
  }