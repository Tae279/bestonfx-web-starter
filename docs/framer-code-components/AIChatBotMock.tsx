import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type AIChatBotMockProps = {
  launcherLabel: string;
  panelTitle: string;
  panelSubtitle: string;
  suggestedQuestions: string[];
  sampleReply: string;
  escalationText: string;
  lineUrl: string;
  complianceFooter: string;
  primaryBlue: string;
  lineGreen: string;
  expanded: boolean;
  style?: CSSProperties;
};

const defaultQuestions = [
  "เปิดบัญชีต้องใช้อะไรบ้าง?",
  "Leverage คืออะไร?",
  "สมัคร IB ต้องทำอย่างไร?",
  "คุยกับเจ้าหน้าที่ทาง LINE",
];

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 360
 * @framerIntrinsicHeight 560
 */
export default function AIChatBotMock(props: AIChatBotMockProps) {
  const {
    launcherLabel,
    panelTitle,
    panelSubtitle,
    suggestedQuestions,
    sampleReply,
    escalationText,
    lineUrl,
    complianceFooter,
    primaryBlue,
    lineGreen,
    expanded,
    style,
  } = props;

  return (
    <div
      style={{
        ...style,
        width: "100%",
        minWidth: 300,
        maxWidth: 380,
        display: "grid",
        justifyItems: "end",
        gap: 12,
        fontFamily:
          "Prompt, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {expanded ? (
        <section
          aria-label="BestonFX AI Help mock panel"
          style={{
            width: "100%",
            borderRadius: 24,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 26px 72px rgba(15, 23, 42, 0.16)",
            overflow: "hidden",
          }}
        >
          <header
            style={{
              padding: 18,
              background: "#EFF4FF",
              borderBottom: "1px solid #D7E2F5",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#171717",
                fontSize: 16,
                lineHeight: 1.2,
              }}
            >
              {panelTitle}
            </strong>
            <p
              style={{
                margin: "6px 0 0",
                color: "#4B5563",
                fontSize: 12,
                lineHeight: 1.55,
              }}
            >
              {panelSubtitle}
            </p>
          </header>

          <div style={{ padding: 16, display: "grid", gap: 12 }}>
            <div style={{ display: "grid", gap: 8 }}>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={`${question}-${index}`}
                  style={{
                    minHeight: 40,
                    padding: "9px 12px",
                    borderRadius: 14,
                    border: "1px solid #E5E7EB",
                    background: "#FFFFFF",
                    color: "#334155",
                    font: "inherit",
                    fontSize: 12,
                    textAlign: "left",
                    cursor: "default",
                  }}
                >
                  {question}
                </button>
              ))}
            </div>

            <div
              style={{
                borderRadius: 18,
                background: "#F8FAFC",
                border: "1px solid #E5E7EB",
                padding: 13,
                color: "#4B5563",
                fontSize: 12,
                lineHeight: 1.65,
              }}
            >
              {sampleReply}
            </div>

            <a
              href={lineUrl}
              style={{
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: lineGreen,
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 750,
                textDecoration: "none",
              }}
            >
              {escalationText}
            </a>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: 11,
                lineHeight: 1.5,
                textAlign: "center",
              }}
            >
              {complianceFooter}
            </p>
          </div>
        </section>
      ) : null}

      <button
        style={{
          minHeight: 52,
          padding: "0 18px",
          border: 0,
          borderRadius: 999,
          background: primaryBlue,
          color: "#FFFFFF",
          boxShadow: "0 18px 38px rgba(0, 64, 193, 0.24)",
          font: "inherit",
          fontSize: 14,
          fontWeight: 800,
          cursor: "default",
        }}
      >
        {launcherLabel}
      </button>
    </div>
  );
}

AIChatBotMock.defaultProps = {
  launcherLabel: "BestonFX AI Help",
  panelTitle: "BestonFX AI Help",
  panelSubtitle:
    "ตอบคำถามทั่วไป และส่งต่อทีม LINE เมื่อคำถามต้องใช้เจ้าหน้าที่",
  suggestedQuestions: defaultQuestions,
  sampleReply:
    "AI Bot ให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขาย หากคำถามเกี่ยวกับเงื่อนไขบัญชีหรือข้อมูลเฉพาะ โปรดคุยกับทีมงานทาง LINE",
  escalationText: "ส่งต่อ LINE Support",
  lineUrl: "/support",
  complianceFooter: "ข้อมูลจาก AI เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุน",
  primaryBlue: "#0040C1",
  lineGreen: "#06C755",
  expanded: true,
};

addPropertyControls(AIChatBotMock, {
  launcherLabel: {
    type: ControlType.String,
    title: "Launcher",
    defaultValue: "BestonFX AI Help",
  },
  panelTitle: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "BestonFX AI Help",
  },
  panelSubtitle: {
    type: ControlType.String,
    title: "Subtitle",
    defaultValue:
      "ตอบคำถามทั่วไป และส่งต่อทีม LINE เมื่อคำถามต้องใช้เจ้าหน้าที่",
  },
  suggestedQuestions: {
    type: ControlType.Array,
    title: "Questions",
    maxCount: 4,
    defaultValue: defaultQuestions,
    control: { type: ControlType.String, title: "Question" },
  },
  sampleReply: {
    type: ControlType.String,
    title: "Reply",
    displayTextArea: true,
    defaultValue:
      "AI Bot ให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขาย หากคำถามเกี่ยวกับเงื่อนไขบัญชีหรือข้อมูลเฉพาะ โปรดคุยกับทีมงานทาง LINE",
  },
  escalationText: {
    type: ControlType.String,
    title: "LINE CTA",
    defaultValue: "ส่งต่อ LINE Support",
  },
  lineUrl: {
    type: ControlType.String,
    title: "LINE URL",
    defaultValue: "/support",
  },
  complianceFooter: {
    type: ControlType.String,
    title: "Footer",
    defaultValue: "ข้อมูลจาก AI เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุน",
  },
  primaryBlue: {
    type: ControlType.Color,
    title: "Primary",
    defaultValue: "#0040C1",
  },
  lineGreen: {
    type: ControlType.Color,
    title: "LINE",
    defaultValue: "#06C755",
  },
  expanded: {
    type: ControlType.Boolean,
    title: "Expanded",
    defaultValue: true,
    enabledTitle: "Open",
    disabledTitle: "Closed",
  },
});
