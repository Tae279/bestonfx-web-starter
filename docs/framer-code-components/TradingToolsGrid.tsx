import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type ToolCard = {
  icon: string;
  title: string;
  description: string;
  status: string;
  ctaText: string;
  ctaUrl: string;
};

type TradingToolsGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  tools: ToolCard[];
  primaryBlue: string;
  softBlue: string;
  style?: CSSProperties;
};

const defaultTools: ToolCard[] = [
  {
    icon: "PIP",
    title: "Pip Calculator",
    description: "ช่วยอธิบายมูลค่า pip ตามสินทรัพย์และขนาดสัญญา",
    status: "Demo",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/tools",
  },
  {
    icon: "M",
    title: "Margin Calculator",
    description: "ช่วยประเมินเงินประกันที่ต้องใช้ โดยข้อมูลจริงรอยืนยัน",
    status: "Demo",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/tools",
  },
  {
    icon: "R",
    title: "Position Risk Calculator",
    description: "ช่วยคิดสัดส่วนความเสี่ยงต่อพอร์ตตามค่าที่ผู้ใช้กรอก",
    status: "Demo",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/tools",
  },
  {
    icon: "EC",
    title: "Economic Calendar",
    description: "แสดงแนวคิดปฏิทินข่าวสำคัญสำหรับ POC",
    status: "Coming soon",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/tools",
  },
  {
    icon: "C",
    title: "Trading Cost Estimator",
    description:
      "พื้นที่สำหรับอธิบายต้นทุนโดยใช้ placeholder จนกว่าเงื่อนไขได้รับอนุมัติ",
    status: "Placeholder",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/tools",
  },
  {
    icon: "AI",
    title: "AI Help Center",
    description: "ตอบคำถามทั่วไปเกี่ยวกับขั้นตอนใช้งาน ไม่ใช่คำแนะนำซื้อขาย",
    status: "Mock",
    ctaText: "ดูรายละเอียด",
    ctaUrl: "/support",
  },
];

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 700
 */
export default function TradingToolsGrid(props: TradingToolsGridProps) {
  const { eyebrow, title, description, tools, primaryBlue, softBlue, style } =
    props;

  return (
    <section
      style={{
        ...style,
        width: "100%",
        background: "#FAFAFA",
        fontFamily:
          "Prompt, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "88px 22px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <p
            style={{
              margin: 0,
              color: primaryBlue,
              fontSize: 13,
              fontWeight: 750,
              letterSpacing: 0,
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              color: "#171717",
              fontSize: "clamp(30px, 4vw, 50px)",
              lineHeight: 1.05,
              letterSpacing: 0,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              color: "#4B5563",
              fontSize: 16,
              lineHeight: 1.75,
              letterSpacing: 0,
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 36,
          }}
        >
          {tools.map((tool, index) => (
            <article
              key={`${tool.title}-${index}`}
              style={{
                minHeight: 228,
                padding: 24,
                borderRadius: 28,
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 18px 46px rgba(15, 23, 42, 0.055)",
                display: "grid",
                alignContent: "space-between",
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 16,
                      display: "grid",
                      placeItems: "center",
                      background: softBlue,
                      color: primaryBlue,
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {tool.icon}
                  </span>
                  <span
                    style={{
                      padding: "6px 9px",
                      borderRadius: 999,
                      background: "#F1F5F9",
                      color: "#475569",
                      fontSize: 11,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {tool.status}
                  </span>
                </div>
                <h3
                  style={{
                    margin: 0,
                    color: "#171717",
                    fontSize: 19,
                    lineHeight: 1.2,
                    letterSpacing: 0,
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#4B5563",
                    fontSize: 14,
                    lineHeight: 1.65,
                    letterSpacing: 0,
                  }}
                >
                  {tool.description}
                </p>
              </div>

              <a
                href={tool.ctaUrl}
                style={{
                  color: primaryBlue,
                  fontSize: 14,
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                {tool.ctaText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

TradingToolsGrid.defaultProps = {
  eyebrow: "TRADING TOOLS",
  title: "เครื่องมือช่วยวางแผนก่อนตัดสินใจ",
  description:
    "เครื่องมือเหล่านี้เป็น mock/demo สำหรับช่วยอธิบายความเสี่ยงและต้นทุนเบื้องต้น ไม่ใช่คำแนะนำการลงทุน",
  tools: defaultTools,
  primaryBlue: "#0040C1",
  softBlue: "#EFF4FF",
};

addPropertyControls(TradingToolsGrid, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "TRADING TOOLS",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "เครื่องมือช่วยวางแผนก่อนตัดสินใจ",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "เครื่องมือเหล่านี้เป็น mock/demo สำหรับช่วยอธิบายความเสี่ยงและต้นทุนเบื้องต้น ไม่ใช่คำแนะนำการลงทุน",
  },
  tools: {
    type: ControlType.Array,
    title: "Tools",
    maxCount: 6,
    defaultValue: defaultTools,
    control: {
      type: ControlType.Object,
      controls: {
        icon: { type: ControlType.String, title: "Icon" },
        title: { type: ControlType.String, title: "Title" },
        description: {
          type: ControlType.String,
          title: "Description",
          displayTextArea: true,
        },
        status: { type: ControlType.String, title: "Status" },
        ctaText: { type: ControlType.String, title: "CTA" },
        ctaUrl: { type: ControlType.String, title: "URL" },
      },
    },
  },
  primaryBlue: {
    type: ControlType.Color,
    title: "Primary",
    defaultValue: "#0040C1",
  },
  softBlue: {
    type: ControlType.Color,
    title: "Surface",
    defaultValue: "#EFF4FF",
  },
});
