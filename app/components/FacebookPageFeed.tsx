type FacebookPageFeedProps = {
  pageUrl: string;
};

export default function FacebookPageFeed({
  pageUrl,
}: FacebookPageFeedProps) {
  const iframeUrl =
    `https://www.facebook.com/plugins/page.php` +
    `?href=${encodeURIComponent(pageUrl)}` +
    `&tabs=timeline` +
    `&width=500` +
    `&height=700` +
    `&small_header=false` +
    `&adapt_container_width=true` +
    `&hide_cover=false` +
    `&show_facepile=true`;

  return (
    <div className="mx-auto w-full max-w-[500px] overflow-hidden">
      <iframe
        src={iframeUrl}
        title="Noutăți de pe pagina Facebook ZAR’VĂ"
        width="100%"
        height="700"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        className="block border-0"
      />
    </div>
  );
}
