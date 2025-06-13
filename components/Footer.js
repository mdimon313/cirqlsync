import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="py-20 bg-slate-100 dark:bg-[#0a0a0a]">
      <Container>
        <p className="text-center text-slate-900 dark:text-slate-50">
          &copy;&nbsp;{currentYear}&nbsp;CirQL Sync. All rights reserved.
        </p>
      </Container>
    </section>
  );
}
