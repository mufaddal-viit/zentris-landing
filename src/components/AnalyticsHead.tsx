/**
 * Inline Google Consent Mode v2 default (deny all before consent).
 * Also renders GSC and Bing verification meta tags if env vars are set.
 * This is a server component — renders in <head> via layout metadata or as a component.
 */
export default function AnalyticsHead() {
  const gscTag = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  const bingTag = process.env.NEXT_PUBLIC_BING_VERIFICATION;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {gscTag && <meta name="google-site-verification" content={gscTag} />}
      {bingTag && <meta name="msvalidate.01" content={bingTag} />}
      {gaId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500
              });
              gtag('js', new Date());
              gtag('config', '${gaId}');
              window.gtag = gtag;
            `,
          }}
        />
      )}
    </>
  );
}
