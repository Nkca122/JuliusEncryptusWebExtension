export default function Layout({children}) {
  return (
    <>
      <main
        style={{
          width: "100%",
          minHeight: "calc(100vh - 2*(var(--padding)))",
          position: "relative",
          border: "1px solid #3C3C3C",
          boxShadow:
            "4px 4px 0 black, 6px 6px 0 rgba(0, 0, 0, 0.8), 8px 8px 0 rgba(0, 0, 0, 0.6)",
        }}
      >
        {children}
      </main>
    </>
  );
}
