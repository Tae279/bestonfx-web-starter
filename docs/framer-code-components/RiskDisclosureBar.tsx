import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type RiskDisclosureBarProps = {
  message: string;
  linkText: string;
  linkUrl: string;
  showIcon: boolean;
  sticky: boolean;
  compact: boolean;
  backgroundColor: string;
  accentColor: string;
  borderColor: string;
  textColor: string;
  style?: CSSProperties;
};

const defaultMessage =
  "Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ";

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 48
 */
export default function RiskDisclosureBar(props: RiskDisclosureBarProps) {
  const {
    message,
    linkText,
    linkUrl,
    showIcon,
    sticky,
    compact,
    backgroundColor,
    accentColor,
    borderColor,
    textColor,
    style,
  } = props;

  return (
    <section
      aria-label="Risk disclosure"
      style={{
        ...style,
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 20 : undefined,
        width: "100%",
        background: backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
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
          minHeight: compact ? 38 : 46,
          margin: "0 auto",
          padding: compact ? "7px 18px" : "10px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            minWidth: 0,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {showIcon ? <ShieldIcon color={accentColor} /> : null}
          <p
            style={{
              margin: 0,
              fontSize: compact ? 12 : 13,
              lineHeight: 1.55,
              letterSpacing: 0,
              overflowWrap: "break-word",
            }}
          >
            {message}
          </p>
        </div>

        <a
          href={linkUrl}
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 30,
            padding: "6px 11px",
            borderRadius: 999,
            color: accentColor,
            background: "rgba(255, 255, 255, 0.72)",
            border: `1px solid ${borderColor}`,
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}

RiskDisclosureBar.defaultProps = {
  message: defaultMessage,
  linkText: "อ่านคำเตือนความเสี่ยง",
  linkUrl: "/legal/risk-disclosure",
  showIcon: true,
  sticky: true,
  compact: false,
  backgroundColor: "#FFF7ED",
  accentColor: "#B45309",
  borderColor: "#FED7AA",
  textColor: "#4B5563",
};

addPropertyControls(RiskDisclosureBar, {
  message: {
    type: ControlType.String,
    title: "Message",
    displayTextArea: true,
    defaultValue: defaultMessage,
  },
  linkText: {
    type: ControlType.String,
    title: "Link Text",
    defaultValue: "อ่านคำเตือนความเสี่ยง",
  },
  linkUrl: {
    type: ControlType.String,
    title: "Link URL",
    defaultValue: "/legal/risk-disclosure",
  },
  showIcon: {
    type: ControlType.Boolean,
    title: "Icon",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  sticky: {
    type: ControlType.Boolean,
    title: "Sticky",
    defaultValue: true,
    enabledTitle: "On",
    disabledTitle: "Off",
  },
  compact: {
    type: ControlType.Boolean,
    title: "Compact",
    defaultValue: false,
    enabledTitle: "On",
    disabledTitle: "Off",
  },
  backgroundColor: {
    type: ControlType.Color,
    title: "Background",
    defaultValue: "#FFF7ED",
  },
  accentColor: {
    type: ControlType.Color,
    title: "Accent",
    defaultValue: "#B45309",
  },
  borderColor: {
    type: ControlType.Color,
    title: "Border",
    defaultValue: "#FED7AA",
  },
  textColor: {
    type: ControlType.Color,
    title: "Text",
    defaultValue: "#4B5563",
  },
});

function ShieldIcon({ color }: { color: string }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        flex: "0 0 auto",
        marginTop: 1,
      }}
    >
      <path
        d="M12 3.5L5.75 6.2V11.3C5.75 15.15 8.25 18.78 12 20.5C15.75 18.78 18.25 15.15 18.25 11.3V6.2L12 3.5Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12.4"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 15.65H12.01"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
