import { Music2, Play } from 'lucide-react';
import VideoPlaceholder from '../components/VideoPlaceholder';

const songs = [
  {
    title: 'The Gift',
    description: '“The Gift” is a gospel melody celebrating the profound generosity of God. Inspired by His grace, the song reveals the greatest gift ever given—His love, redemption, and eternal blessings. Through heartfelt lyrics and uplifting harmonies, listeners are invited to reflect on the boundless love and grace found in Jesus Christ.',
    embedUrl: 'https://www.youtube.com/embed/ZOo5J7OfrlA',
  },
  {
    title: 'The Promise',
    description: '“The Promise” is one of Larry B. Bachman’s signature songs. Written from a deeply personal journey of friendship, loss, and unwavering faith, it stands as a testimony to God’s promises and His faithfulness through every season of life.',
    embedUrl: 'https://www.youtube.com/embed/9bLcky2KZYQ',
  },
];

export default function Music() {
  return (
    <div className="min-h-screen bg-navy">
      <section
        className="relative overflow-hidden border-b border-gold/10 bg-cover bg-center pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={{ backgroundImage: "url('/music-hero-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#251908]/95 via-[#251908]/82 to-[#251908]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.14),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">Songs of Faith and Promise</p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-6xl">Music</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-warm-white/70 sm:text-lg">
            Music has always been an important part of Larry B. Bachman’s journey. Through every lyric and melody, his songs reflect faith, hope, and the promises of God. Each composition shares a message of encouragement, inviting listeners to experience God’s love, grace, and faithfulness.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-navy/15 bg-[#b8b6b1]">
        <div className="container-wide">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Listen</p>
            <h2 className="font-serif text-4xl font-bold text-navy">Featured Songs</h2>
          </div>
          <div className="space-y-10">
            {songs.map((song, index) => (
              <article key={song.title} className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <Music2 size={20} className="text-gold" />
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-bold text-warm-white">{song.title}</h3>
                  <p className="leading-relaxed text-warm-white/65">{song.description}</p>
                </div>
                <div className={`min-h-[240px] bg-navy-card/70 p-4 sm:p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {song.embedUrl ? (
                    <div className="relative aspect-video h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-gold/20">
                      <iframe
                        src={song.embedUrl}
                        title={`${song.title} by Larry B. Bachman`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <VideoPlaceholder label={`${song.title} YouTube Video`} className="h-full min-h-[220px] w-full rounded-xl" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-warm-white">
        <div className="container-wide">
          <div className="mb-14 max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Featured Story</p>
            <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">The Story Behind “The Promise”</h2>
            <p className="font-serif text-2xl leading-relaxed text-gold-light">Every song has a story. Some songs are written. Others are lived.</p>
          </div>

          <article className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <h3 className="mb-6 font-serif text-3xl font-bold text-gold-light">One Friendship. One Heartbreaking Loss.</h3>
              <p className="mb-5 leading-relaxed text-warm-white/70">
                For songwriter Larry B. Bachman, The Promise wasn’t created in a recording studio or born from a search for commercial success. It came from friendship, heartbreak, faith, and what Larry believes was God’s unmistakable hand guiding every step.
              </p>
              <p className="mb-6 leading-relaxed text-warm-white/70">
                Today, The Promise is recognized as one of Larry’s signature songs. Yet long before audiences heard its powerful lyrics, the song began with a simple phone call from a hurting friend. Before you read the story, take a few minutes to listen to “The Promise.” The words will take on even deeper meaning once you know the remarkable journey that inspired them.
              </p>
              <a
                href="https://youtu.be/9bLcky2KZYQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-gold-light"
              >
                <Play size={17} /> The Promise
              </a>
            </div>
            <img src="/The-Promise-Cover-Artwork.webp" alt="The Promise cover artwork" width="1200" height="1200" loading="lazy" decoding="async" className="h-full min-h-[380px] w-full object-cover" />
          </article>

          <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">A Phone Call That Changed Everything</p>
              <h3 className="mb-5 font-serif text-3xl font-bold text-gold-light">A Promise Between Friends</h3>
              <p className="mb-5 leading-relaxed text-warm-white/70">The song wasn’t written to become a hit record. It wasn’t created with a movie in mind, nor was it intended to launch a book. It was born from one of life’s most difficult experiences—a friendship tested by distance, a heartbreaking loss, and a promise that would remain in Larry B. Bachman’s heart for years.</p>
              <p className="mb-5 leading-relaxed text-warm-white/70">Long before The Promise found its place in The Sparrows Nesting or inspired readers through The Lady and Jesse Make a Promise, it began in the quiet countryside of Pennsylvania. There, Larry spent countless hours studying the Bible with a close friend named Scott.</p>
              <p className="leading-relaxed text-warm-white/70">Before Larry left Pennsylvania for an opportunity in California, the two friends made a simple promise: if anything should happen to either of them, somehow, some way, they would let the other know.</p>
            </div>
            <img src="/A-Phone-Call-That-Changed-Everything.webp" alt="A Phone Call That Changed Everything" width="1200" height="1200" loading="lazy" decoding="async" className="h-full min-h-[380px] w-full object-cover" />
          </article>

          <article className="mt-12 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20">
            <img src="/When-Tomorrow Never-Came.webp" alt="When Tomorrow Never Came" width="1440" height="960" loading="lazy" decoding="async" className="aspect-[16/5] w-full object-cover" />
            <div className="grid grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:p-12">
              <div>
                <h3 className="mb-5 font-serif text-3xl font-bold text-gold-light">When Tomorrow Never Came</h3>
                <p className="mb-5 leading-relaxed text-warm-white/70">The next morning, Larry drove to Scott’s apartment expecting to meet his friend for breakfast. Scott never answered the door. His girlfriend met Larry outside and quietly told him Scott had never come home the night before.</p>
                <p className="mb-5 leading-relaxed text-warm-white/70">Finally, Larry returned home. As he walked through the door, his mother looked at him and said words he would never forget: “Larry, you need to sit down.” Then she told him, “Scott’s dead.”</p>
                <p className="leading-relaxed text-warm-white/70">The news left Larry heartbroken. He served as one of the pallbearers at Scott’s funeral, carrying the burden of unanswered questions, regret, and the memory of their final conversation.</p>
              </div>
              <div>
                <h3 className="mb-5 font-serif text-3xl font-bold text-gold-light">The Dream</h3>
                <p className="mb-5 leading-relaxed text-warm-white/70">Nearly a year passed before another unexpected chapter unfolded. A friend called Larry after experiencing a dream she simply couldn’t explain. In it, she saw Scott and later understood the words: “We’re sleeping. We’re waiting.”</p>
                <p className="mb-5 leading-relaxed text-warm-white/70">Then she looked at Larry and said, “Scott wanted me to tell you.” The moment she spoke those words, Larry remembered the promise the two friends had made before California.</p>
                <p className="leading-relaxed text-warm-white/70">For Larry, the experience wasn’t about sensationalism or trying to explain the unexplainable. It became another reminder of God’s providence and the hope found in His promises.</p>
              </div>
            </div>
          </article>

          <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <h3 className="mb-5 font-serif text-3xl font-bold text-gold-light">When God Rewrote the Song</h3>
              <p className="mb-5 leading-relaxed text-warm-white/70">Years later, while helping his son produce an album, Larry experienced another moment he believes was directed by God. As he reflected on the unfinished song If You Need a Friend, he sensed a clear impression on his heart: rewrite it. Turn it into a praise song.</p>
              <p className="leading-relaxed text-warm-white/70">Within minutes, the message born out of grief became a testimony of faith. If You Need a Friend became The Promise—a song for anyone searching for hope, peace, and the assurance that God’s promises never fail.</p>
              <a
                href="https://www.youtube.com/watch?v=q-g_sZ9svW4"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-sm bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
              >
                <Play size={17} /> Watch on YouTube
              </a>
            </div>
            <div className="grid grid-rows-[auto_1fr] bg-gold/5">
              <img src="/the sparrow nesting movie.webp" alt="The Sparrows Nesting movie artwork" width="1280" height="720" loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">From Song to Screen</p>
                <p className="leading-relaxed text-warm-white/70">Not long afterward, a producer working on the feature film The Sparrows Nesting needed music for the soundtrack. Larry submitted The Promise. The song remained in the film, where it was performed by Shana Saint and introduced to audiences worldwide.</p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
