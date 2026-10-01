import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getYouTubeWatchUrl, gradTalks } from "@/components/talks/data";
import YouTubeEmbed from "@/components/talks/YouTubeEmbed";
import ShareTalkButton from "@/components/talks/ShareTalkButton";

export default function TalksPage() {
  const [featured, ...talks] = gradTalks;

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_50%_22%,rgba(20,39,66,0.32),transparent_60%)] px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 sm:mb-12">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[9px] font-bold uppercase tracking-[1.4px] text-[#919caf] sm:text-xs sm:tracking-[2px]">
            <span>Computer Engineers’ Society, SIT</span>
            <span className="text-[#7a8cff]">Alumni Series · Two Seasons</span>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#7a8cff]/25 bg-[radial-gradient(circle,#1e3b5c,#101925_72%)] text-2xl text-[#7a8cff]" aria-hidden="true">✦</div>
            <h1 className="text-4xl font-black tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">GRAD TALKS</h1>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <p className="max-w-xl text-sm leading-6 text-[#a49fc9] sm:text-base">Conversations with CES alumni about their paths from campus to career.</p>
          </div>
        </header>

        <section aria-labelledby="featured-talk-heading" className="overflow-hidden rounded-3xl border border-[#262f3f] bg-[#111621]">
          <div className="grid lg:min-h-[560px] lg:grid-cols-[260px_minmax(0,1fr)]">
            <div className="flex flex-col items-center justify-center gap-5 border-b border-[#262f3f] bg-[radial-gradient(ellipse_at_center,rgba(30,59,92,0.9),rgba(21,36,55,0.5)_50%,rgba(11,13,18,0.35))] p-7 text-center lg:border-r lg:border-b-0 lg:p-8">
              <span className="rounded-md bg-[#262f3f] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-white">Featured alum</span>
              <div>
                <h2 className="text-2xl font-bold text-white">{featured.name}</h2>
                <p className="mt-1 text-sm text-[#919caf]">CSE · Class of {featured.classYear}</p>
              </div>
            </div>
            <div className="flex min-w-0 flex-col gap-4 p-5 sm:p-8 lg:p-9">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[1.4px] text-[#7a8cff] sm:text-xs">{featured.role}</p>
                <h2 id="featured-talk-heading" className="mt-3 max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl">{featured.title}</h2>
              </div>
              <YouTubeEmbed talk={featured} loading="eager" />
              <p className="text-sm leading-6 text-[#919caf]">{featured.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-[#919caf]">{featured.season} · {featured.duration}</p>
                <a href={getYouTubeWatchUrl(featured)} className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#7a8cff] underline underline-offset-4 hover:text-[#bac4ff]">Watch on YouTube <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
                <ShareTalkButton talk={featured} />
              </div>
            </div>
          </div>
        </section>

        <div className="my-8 flex items-center gap-5 border-b border-white/[0.08] pb-4 sm:my-10">
          <h2 className="shrink-0 font-mono text-xs font-bold uppercase tracking-[1.6px] text-[#a49fc9] sm:text-sm">More alumni talks</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#7a8cff]/50 to-transparent" />
          <Link href="/" className="inline-flex shrink-0 items-center gap-1 text-xs text-[#919caf] transition hover:text-white"><ArrowLeft className="h-3.5 w-3.5" /> Home</Link>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {talks.map((talk) => (
            <article key={talk.videoId} className="overflow-hidden rounded-3xl border border-[#262f3f] bg-[#111621] transition-colors hover:border-[#7a8cff]/35">
              <div className="grid lg:min-h-[320px] lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="flex flex-col items-center justify-center gap-4 border-b border-[#262f3f] bg-[radial-gradient(ellipse_at_center,rgba(30,59,92,0.72),rgba(11,13,18,0.3)_70%)] p-6 text-center lg:border-r lg:border-b-0">
                  <span className="rounded-md bg-[#262f3f] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wide text-white">{talk.season}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{talk.name}</h3>
                    <p className="mt-1 text-sm text-[#919caf]">CSE · Class of {talk.classYear}</p>
                  </div>
                </div>
                <div className="grid min-w-0 gap-5 p-5 sm:p-7 md:grid-cols-2 md:items-center md:gap-7">
                  <YouTubeEmbed talk={talk} />
                  <div className="flex min-w-0 flex-col gap-3">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[1.3px] text-[#7a8cff]">{talk.role}</p>
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{talk.title}</h3>
                    <p className="text-sm leading-6 text-[#919caf]">{talk.description}</p>
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-[#919caf]">{talk.season} · {talk.duration}</span>
                      <a href={getYouTubeWatchUrl(talk)} className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-[#7a8cff] hover:text-[#bac4ff]">Watch on YouTube <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
                      <ShareTalkButton talk={talk} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-12 border-t border-white/[0.06] py-6 text-center font-mono text-[9px] font-semibold uppercase tracking-[1.5px] text-[#5e697e]">CES · Celebrating the people who coded their beginning here</footer>
      </div>
    </main>
  );
}
