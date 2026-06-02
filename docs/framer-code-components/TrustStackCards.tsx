import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type TrustCard = {
  icon: string;
  title: string;
  description: string;
};

type TrustStackCardsProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: TrustCard[];
  primaryBlue: string;
  softBlue: string;
  backgroundColor: string;
  style?: CSSProperties;
};

const defaultCards: TrustCard[] = [
  {
    icon: "01",
    title: "ข้อมูลชัดก่อนเปิดบัญชี",
    description: "แยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่รอฝ่ายกำกับดูแลอนุมัติ",
  },
  {
    icon: "02",
    title: "Risk-first onboarding",
    description:
      "แสดงคำเตือนความเสี่ยงก่อน CTA สำคัญ และหลีกเลี่ยงภาษาชวนเชื่อเกินจริง",
  },
  {
    icon: "03",
    title: "เครื่องมือช่วยคำนวณ",
    description:
      "ใช้เป็นตัวช่วยวางแผนขนาดสถานะและความเสี่ยง ไม่ใช่คำแนะนำการลงทุน",
  },
  {
    icon: "04",
    title: "LINE Support สำหรับไทย",
    description: "พาผู้ใช้ไปคุยกับทีมเรื่องบัญชี เอกสาร และขั้นตอนใช้งาน",
  },
  {
    icon: "05",
    title: "DX Ecosystem",
    description:
      "เชื่อมการเรียนรู้ การดูแล และเครื่องมือในระบบ DX โดยไม่อ้างผลลัพธ์การเทรด",
  },
  {
    icon: "06",
    title: "IB Partner mock",
    description:
      "อธิบายแนวคิดพาร์ทเนอร์ด้วยข้อมูลตัวอย่างเท่านั้น ไม่ใช่การรับประกันรายได้",
  },
];

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 620
 */
export default function TrustStackCards(props: TrustStackCardsProps) {
  const {
    eyebrow,
    title,
    description,
    cards,
    primaryBlue,
    softBlue,
    backgroundColor,
    style,
  } = props;

  return (
    <section
      style={{
        ...style,
        width: "100%",
        background: backgroundColor,
        color: "#171717",
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.78fr) minmax(0, 1.22fr)",
            gap: 42,
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: primaryBlue,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 0,
              }}
            >
              {eyebrow}
            </p>
            <h2
              style={{
                margin: "14px 0 0",
                maxWidth: 460,
                color: "#171717",
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: 0,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: 520,
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
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 14,
            }}
          >
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                style={{
                  minHeight: 190,
                  padding: 22,
                  borderRadius: 26,
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 20px 52px rgba(15, 23, 42, 0.06)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 16,
                    display: "grid",
                    placeItems: "center",
                    background: softBlue,
                    color: primaryBlue,
                    fontSize: 12,
                    fontWeight: 750,
                    marginBottom: 18,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    margin: 0,
                    color: "#171717",
                    fontSize: 18,
                    lineHeight: 1.25,
                    letterSpacing: 0,
                  }}
                >
                  {card.title}
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
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

TrustStackCards.defaultProps = {
  eyebrow: "TRUST STACK",
  title: "ออกแบบให้ข้อมูลสำคัญชัดก่อนเริ่มใช้งาน",
  description:
    "ทุกส่วนใน POC ต้องช่วยให้ผู้ใช้เข้าใจความเสี่ยง เงื่อนไข และช่องทางติดต่อ โดยไม่สร้างความคาดหวังเรื่องผลตอบแทน",
  cards: defaultCards,
  primaryBlue: "#0040C1",
  softBlue: "#EFF4FF",
  backgroundColor: "#FAFAFA",
};

addPropertyControls(TrustStackCards, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "TRUST STACK",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "ออกแบบให้ข้อมูลสำคัญชัดก่อนเริ่มใช้งาน",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "ทุกส่วนใน POC ต้องช่วยให้ผู้ใช้เข้าใจความเสี่ยง เงื่อนไข และช่องทางติดต่อ โดยไม่สร้างความคาดหวังเรื่องผลตอบแทน",
  },
  cards: {
    type: ControlType.Array,
    title: "Cards",
    maxCount: 6,
    defaultValue: defaultCards,
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
  backgroundColor: {
    type: ControlType.Color,
    title: "Background",
    defaultValue: "#FAFAFA",
  },
});
