import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type TerminalHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  riskNote: string;
  proofLine: string;
  deviceLabel: string;
  showMockup: boolean;
  primaryBlue: string;
  brightBlue: string;
  softBlue: string;
  textColor: string;
  mutedTextColor: string;
  style?: CSSProperties;
};

const verificationPlaceholder = "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่";

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 680
 */
export default function TerminalHero(props: TerminalHeroProps) {
  const {
    eyebrow,
    headline,
    subheadline,
    primaryCtaText,
    primaryCtaUrl,
    secondaryCtaText,
    secondaryCtaUrl,
    riskNote,
    proofLine,
    deviceLabel,
    showMockup,
    primaryBlue,
    brightBlue,
    softBlue,
    textColor,
    mutedTextColor,
    style,
  } = props;

  return (
    <section
      style={{
        ...style,
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 62%, #FFFFFF 100%)",
        color: textColor,
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
          padding: "92px 22px 88px",
          display: "grid",
          gridTemplateColumns: showMockup
            ? "minmax(0, 1.04fr) minmax(360px, 0.96fr)"
            : "minmax(0, 760px)",
          alignItems: "center",
          gap: 54,
          boxSizing: "border-box",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              minHeight: 34,
              padding: "7px 13px",
              borderRadius: 999,
              background: softBlue,
              border: "1px solid rgba(0, 64, 193, 0.14)",
              color: primaryBlue,
              fontSize: 13,
              lineHeight: 1,
              fontWeight: 650,
              letterSpacing: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: primaryBlue,
                boxShadow: `0 0 0 4px ${softBlue}`,
              }}
            />
            {eyebrow}
          </div>

          <h1
            style={{
              maxWidth: 680,
              margin: "24px 0 0",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.96,
              letterSpacing: 0,
              fontWeight: 720,
              color: textColor,
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              maxWidth: 640,
              margin: "24px 0 0",
              color: mutedTextColor,
              fontSize: "clamp(16px, 1.8vw, 20px)",
              lineHeight: 1.75,
              letterSpacing: 0,
              overflowWrap: "break-word",
            }}
          >
            {subheadline}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 30,
            }}
          >
            <a
              href={primaryCtaUrl}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 50,
                padding: "0 22px",
                borderRadius: 999,
                background: primaryBlue,
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: 0,
                textDecoration: "none",
                boxShadow: "0 18px 38px rgba(0, 64, 193, 0.22)",
              }}
            >
              {primaryCtaText}
            </a>

            <a
              href={secondaryCtaUrl}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 50,
                padding: "0 20px",
                borderRadius: 999,
                background: "#FFFFFF",
                color: "#0F172A",
                border: "1px solid #D7E2F5",
                fontSize: 15,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: 0,
                textDecoration: "none",
                boxShadow: "0 14px 32px rgba(15, 23, 42, 0.07)",
              }}
            >
              {secondaryCtaText}
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gap: 9,
              marginTop: 24,
              color: mutedTextColor,
              fontSize: 13,
              lineHeight: 1.65,
              letterSpacing: 0,
            }}
          >
            <p style={{ margin: 0 }}>{riskNote}</p>
            <p
              style={{
                margin: 0,
                color: "#334155",
                fontWeight: 600,
              }}
            >
              {proofLine}
            </p>
          </div>
        </div>

        {showMockup ? (
          <div
            aria-label={deviceLabel}
            style={{
              position: "relative",
              minHeight: 480,
              borderRadius: 36,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "10% 2% 8% 4%",
                borderRadius: 999,
                background: `radial-gradient(circle at 50% 42%, ${softBlue} 0%, rgba(239,244,255,0.78) 36%, rgba(255,255,255,0) 68%)`,
                filter: "blur(8px)",
              }}
            />

            <Hairline
              top={140}
              left={112}
              width={218}
              rotate={-8}
              color={primaryBlue}
            />
            <Hairline
              top={270}
              left={142}
              width={244}
              rotate={9}
              color={primaryBlue}
            />

            <MockCard
              title="MT5"
              label="Platform"
              value="Trading workspace"
              top={30}
              left={30}
              width={230}
              accent={primaryBlue}
            />
            <MockCard
              title="Rebate"
              label="T&C"
              value="ตามเงื่อนไขที่กำหนด"
              top={136}
              right={18}
              width={258}
              accent={brightBlue}
            />
            <MockCard
              title="Account details"
              label="[verify]"
              value={verificationPlaceholder}
              top={270}
              left={6}
              width={286}
              accent={primaryBlue}
            />
            <MockCard
              title="Dashboard"
              label="Sample"
              value="ตัวอย่าง — ไม่ใช่ข้อมูลจริง"
              top={344}
              right={54}
              width={240}
              accent={brightBlue}
            />

            <div
              style={{
                position: "absolute",
                left: 44,
                bottom: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.86)",
                border: "1px solid rgba(0,64,193,0.14)",
                color: mutedTextColor,
                fontSize: 12,
                fontWeight: 600,
                boxShadow: "0 16px 36px rgba(15, 23, 42, 0.08)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: primaryBlue,
                }}
              />
              {deviceLabel}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

TerminalHero.defaultProps = {
  eyebrow: "โบรกเกอร์ Forex/CFD เพื่อคนไทย",
  headline: "Trade Smarter Not Harder",
  subheadline:
    "เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น: ต้นทุน, Rebate ตาม T&C, ความเสี่ยงที่ควรรู้ และทีมไทยที่คุยผ่าน LINE OA ได้",
  primaryCtaText: "เปิดบัญชี",
  primaryCtaUrl: "/accounts",
  secondaryCtaText: "ทัก LINE OA ติดต่อ admin",
  secondaryCtaUrl: "/support",
  riskNote: "การเทรดมีความเสี่ยง เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง",
  proofLine: "เทรดบน MT5 · Rebate ตาม T&C · รายละเอียดบัญชี [verify]",
  deviceLabel: "ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง",
  showMockup: true,
  primaryBlue: "#0040C1",
  brightBlue: "#2970FF",
  softBlue: "#EFF4FF",
  textColor: "#171717",
  mutedTextColor: "#4B5563",
};

addPropertyControls(TerminalHero, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "โบรกเกอร์ Forex/CFD เพื่อคนไทย",
  },
  headline: {
    type: ControlType.String,
    title: "Headline",
    defaultValue: "Trade Smarter Not Harder",
  },
  subheadline: {
    type: ControlType.String,
    title: "Subhead",
    displayTextArea: true,
    defaultValue:
      "เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น: ต้นทุน, Rebate ตาม T&C, ความเสี่ยงที่ควรรู้ และทีมไทยที่คุยผ่าน LINE OA ได้",
  },
  primaryCtaText: {
    type: ControlType.String,
    title: "Primary CTA",
    defaultValue: "เปิดบัญชี",
  },
  primaryCtaUrl: {
    type: ControlType.String,
    title: "Primary URL",
    defaultValue: "/accounts",
  },
  secondaryCtaText: {
    type: ControlType.String,
    title: "Secondary CTA",
    defaultValue: "ทัก LINE OA ติดต่อ admin",
  },
  secondaryCtaUrl: {
    type: ControlType.String,
    title: "Secondary URL",
    defaultValue: "/support",
  },
  riskNote: {
    type: ControlType.String,
    title: "Risk Note",
    displayTextArea: true,
    defaultValue: "การเทรดมีความเสี่ยง เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง",
  },
  proofLine: {
    type: ControlType.String,
    title: "Proof Line",
    defaultValue: "เทรดบน MT5 · Rebate ตาม T&C · รายละเอียดบัญชี [verify]",
  },
  deviceLabel: {
    type: ControlType.String,
    title: "Mockup Label",
    defaultValue: "ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง",
  },
  showMockup: {
    type: ControlType.Boolean,
    title: "Mockup",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  primaryBlue: {
    type: ControlType.Color,
    title: "Primary",
    defaultValue: "#0040C1",
  },
  brightBlue: {
    type: ControlType.Color,
    title: "Bright",
    defaultValue: "#2970FF",
  },
  softBlue: {
    type: ControlType.Color,
    title: "Surface",
    defaultValue: "#EFF4FF",
  },
  textColor: {
    type: ControlType.Color,
    title: "Text",
    defaultValue: "#171717",
  },
  mutedTextColor: {
    type: ControlType.Color,
    title: "Muted",
    defaultValue: "#4B5563",
  },
});

function MockCard({
  title,
  label,
  value,
  top,
  left,
  right,
  width,
  accent,
}: {
  title: string;
  label: string;
  value: string;
  top: number;
  left?: number;
  right?: number;
  width: number;
  accent: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        width,
        padding: 18,
        borderRadius: 26,
        background: "rgba(255,255,255,0.92)",
        border: "1px solid #E5E7EB",
        boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
        backdropFilter: "blur(10px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <strong
          style={{
            color: "#171717",
            fontSize: 15,
            lineHeight: 1,
            letterSpacing: 0,
          }}
        >
          {title}
        </strong>
        <span
          style={{
            padding: "5px 8px",
            borderRadius: 999,
            background: "#EFF4FF",
            color: accent,
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
      <p
        style={{
          margin: 0,
          color: "#4B5563",
          fontSize: 13,
          lineHeight: 1.55,
          letterSpacing: 0,
          overflowWrap: "break-word",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function Hairline({
  top,
  left,
  width,
  rotate,
  color,
}: {
  top: number;
  left: number;
  width: number;
  rotate: number;
  color: string;
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left,
        width,
        height: 1,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "left center",
        background: `linear-gradient(90deg, rgba(0,64,193,0), ${color}, rgba(0,64,193,0))`,
        opacity: 0.22,
      }}
    />
  );
}
