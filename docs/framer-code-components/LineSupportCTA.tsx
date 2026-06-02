import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type LineSupportCTAProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  lineButtonText: string;
  lineUrl: string;
  helpCenterText: string;
  helpCenterUrl: string;
  qrLabel: string;
  supportHours: string;
  primaryBlue: string;
  lineGreen: string;
  style?: CSSProperties;
};

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 520
 */
export default function LineSupportCTA(props: LineSupportCTAProps) {
  const {
    eyebrow,
    headline,
    subheadline,
    lineButtonText,
    lineUrl,
    helpCenterText,
    helpCenterUrl,
    qrLabel,
    supportHours,
    primaryBlue,
    lineGreen,
    style,
  } = props;

  return (
    <section
      style={{
        ...style,
        width: "100%",
        background: "#FFFFFF",
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
          padding: "76px 22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            border: "1px solid #E5E7EB",
            background: "#FFFFFF",
            boxShadow: "0 28px 90px rgba(0, 64, 193, 0.12)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "auto -80px -120px auto",
              width: 310,
              height: 310,
              borderRadius: 999,
              background: "rgba(239,244,255,0.9)",
              filter: "blur(10px)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.75fr)",
              gap: 32,
              padding: "42px",
              alignItems: "center",
            }}
          >
            <div>
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
                  maxWidth: 680,
                  color: "#171717",
                  fontSize: "clamp(30px, 4.4vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: 0,
                }}
              >
                {headline}
              </h2>
              <p
                style={{
                  margin: "18px 0 0",
                  maxWidth: 650,
                  color: "#4B5563",
                  fontSize: 16,
                  lineHeight: 1.75,
                  letterSpacing: 0,
                }}
              >
                {subheadline}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 26,
                }}
              >
                <a
                  href={lineUrl}
                  style={{
                    minHeight: 50,
                    padding: "0 22px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: lineGreen,
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 750,
                    textDecoration: "none",
                    boxShadow: "0 18px 38px rgba(6, 199, 85, 0.22)",
                  }}
                >
                  {lineButtonText}
                </a>
                <a
                  href={helpCenterUrl}
                  style={{
                    minHeight: 50,
                    padding: "0 20px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "#EFF4FF",
                    color: primaryBlue,
                    border: "1px solid rgba(0,64,193,0.12)",
                    fontSize: 15,
                    fontWeight: 750,
                    textDecoration: "none",
                  }}
                >
                  {helpCenterText}
                </a>
              </div>
            </div>

            <aside
              style={{
                borderRadius: 28,
                background: "#F8FAFC",
                border: "1px solid #E5E7EB",
                padding: 18,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "92px 1fr",
                  gap: 14,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    height: 92,
                    borderRadius: 22,
                    background:
                      "linear-gradient(135deg, rgba(6,199,85,0.14), rgba(255,255,255,0.9))",
                    border: "1px dashed rgba(6,199,85,0.55)",
                    color: lineGreen,
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 750,
                    lineHeight: 1.35,
                    padding: 10,
                    boxSizing: "border-box",
                  }}
                >
                  {qrLabel}
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  <ChatBubble who="User" text="เปิดบัญชีต้องเตรียมอะไรบ้าง?" />
                  <ChatBubble
                    who="Support"
                    text="ทีมงานช่วยอธิบายขั้นตอนและเอกสารได้ แต่ข้อมูลเงื่อนไขบัญชีบางส่วนรอยืนยันจากฝ่ายกำกับดูแลก่อนเผยแพร่"
                    highlight
                  />
                </div>
              </div>
              <p
                style={{
                  margin: "16px 0 0",
                  color: "#64748B",
                  fontSize: 12,
                  lineHeight: 1.55,
                }}
              >
                {supportHours}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

LineSupportCTA.defaultProps = {
  eyebrow: "LINE-FIRST SUPPORT",
  headline: "มีคำถามเรื่องบัญชีหรือเอกสาร? คุยกับทีม beston ทาง LINE",
  subheadline:
    "เหมาะสำหรับสอบถามขั้นตอนเปิดบัญชี เอกสาร เงื่อนไขบัญชี และการใช้งานเครื่องมือ โดยทีมงานไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล",
  lineButtonText: "เพิ่มเพื่อน LINE",
  lineUrl: "/support",
  helpCenterText: "ดู Help Center",
  helpCenterUrl: "/support",
  qrLabel: "LINE QR Placeholder",
  supportHours: "รอยืนยันเวลาทำการจากทีม Operations",
  primaryBlue: "#0040C1",
  lineGreen: "#06C755",
};

addPropertyControls(LineSupportCTA, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "LINE-FIRST SUPPORT",
  },
  headline: {
    type: ControlType.String,
    title: "Headline",
    defaultValue: "มีคำถามเรื่องบัญชีหรือเอกสาร? คุยกับทีม beston ทาง LINE",
  },
  subheadline: {
    type: ControlType.String,
    title: "Subhead",
    displayTextArea: true,
    defaultValue:
      "เหมาะสำหรับสอบถามขั้นตอนเปิดบัญชี เอกสาร เงื่อนไขบัญชี และการใช้งานเครื่องมือ โดยทีมงานไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล",
  },
  lineButtonText: {
    type: ControlType.String,
    title: "LINE CTA",
    defaultValue: "เพิ่มเพื่อน LINE",
  },
  lineUrl: {
    type: ControlType.String,
    title: "LINE URL",
    defaultValue: "/support",
  },
  helpCenterText: {
    type: ControlType.String,
    title: "Help CTA",
    defaultValue: "ดู Help Center",
  },
  helpCenterUrl: {
    type: ControlType.String,
    title: "Help URL",
    defaultValue: "/support",
  },
  qrLabel: {
    type: ControlType.String,
    title: "QR Label",
    defaultValue: "LINE QR Placeholder",
  },
  supportHours: {
    type: ControlType.String,
    title: "Hours",
    defaultValue: "รอยืนยันเวลาทำการจากทีม Operations",
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
});

function ChatBubble({
  who,
  text,
  highlight = false,
}: {
  who: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        padding: "11px 12px",
        borderRadius: 18,
        background: highlight ? "#FFFFFF" : "#EFF4FF",
        border: "1px solid #E5E7EB",
      }}
    >
      <strong
        style={{
          display: "block",
          color: "#171717",
          fontSize: 12,
          marginBottom: 4,
        }}
      >
        {who}
      </strong>
      <span style={{ color: "#4B5563", fontSize: 12, lineHeight: 1.55 }}>
        {text}
      </span>
    </div>
  );
}
