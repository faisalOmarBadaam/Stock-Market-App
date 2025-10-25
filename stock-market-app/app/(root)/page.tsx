import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

export default function Home() {
  const Widget = (WidgetName: string): string =>
    `https://s3.tradingview.com/external-embedding/embed-widget-${WidgetName}.js`;
  return (
    <div className=" flex min-h-screen home-wrapper z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={Widget("market-overview")}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md-col-span xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={Widget("stock-heatmap")}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={Widget("timeline")}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={Widget("market-quotes")}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
