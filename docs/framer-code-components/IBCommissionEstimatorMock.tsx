import type { CSSProperties } from "react";
import { addPropertyControls, ControlType } from "framer";

type EstimatorInput = {
  label: string;
  placeholder: string;
};

type IBCommissionEstimatorMockProps = {
  eyebrow: string;
  title: string;
  description: string;
  inputs: EstimatorInput[];
  outputLabel: string;
  outputValue: string;
  disclaimer: string;
  mockOnly: boolean;
  primaryBlue: string;
  riskAmber: string;
  style?: CSSProperties;
};

const defaultInputs: EstimatorInput[] = [
  {
    label: "ปริมาณการเทรดที่แนะนำต่อเดือน",
    placeholder: "กรอกตัวอย่างเท่านั้น",
  },
  {
    label: "อัตรา commission ต่อ lot",
    placeholder: "รอยืนยันเงื่อนไขโปรแกรม",
  },
  {
    label: "จำนวนลูกค้า active",
    placeholder: "ตัวอย่างสำหรับ POC",
  },
];

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 * @framerIntrinsicWidth 1180
 * @framerIntrinsicHeight 600
 */
export default function IBCommissionEstimatorMock(
  props: IBCommissionEstimatorMockProps,
) {
  const {
    eyebrow,
    title,
    description,
    inputs,
    outputLabel,
    outputValue,
    disclaimer,
    mockOnly,
    primaryBlue,
    riskAmber,
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
          padding: "82px 22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.88fr) minmax(320px, 1.12fr)",
            gap: 28,
            alignItems: "stretch",
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
              borderRadius: 32,
              border: "1px solid #E5E7EB",
              background: "#FFFFFF",
              boxShadow: "0 24px 72px rgba(15, 23, 42, 0.09)",
              padding: 24,
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(240px, 0.86fr)",
              gap: 18,
            }}
          >
            <div style={{ display: "grid", gap: 12 }}>
              {inputs.map((input, index) => (
                <label
                  key={`${input.label}-${index}`}
                  style={{ display: "grid", gap: 7 }}
                >
                  <span
                    style={{
                      color: "#334155",
                      fontSize: 13,
                      fontWeight: 650,
                      lineHeight: 1.35,
                    }}
                  >
                    {input.label}
                  </span>
                  <div
                    style={{
                      minHeight: 48,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 16,
                      border: "1px solid #E5E7EB",
                      background: "#F8FAFC",
                      color: "#94A3B8",
                      padding: "0 14px",
                      fontSize: 13,
                    }}
                  >
                    {input.placeholder}
                  </div>
                </label>
              ))}
            </div>

            <aside
              style={{
                borderRadius: 24,
                background: "#F8FAFC",
                border: "1px solid #E5E7EB",
                padding: 18,
                display: "grid",
                alignContent: "space-between",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span
                    style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}
                  >
                    {outputLabel}
                  </span>
                  {mockOnly ? (
                    <span
                      style={{
                        borderRadius: 999,
                        background: "#EFF4FF",
                        color: primaryBlue,
                        padding: "6px 8px",
                        fontSize: 11,
                        fontWeight: 750,
                      }}
                    >
                      Mock only
                    </span>
                  ) : null}
                </div>
                <p
                  style={{
                    margin: "18px 0 0",
                    color: "#171717",
                    fontSize: 22,
                    lineHeight: 1.25,
                    fontWeight: 760,
                    letterSpacing: 0,
                  }}
                >
                  {outputValue}
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  borderRadius: 18,
                  border: "1px solid #FED7AA",
                  background: "#FFF7ED",
                  color: riskAmber,
                  padding: 14,
                  fontSize: 12,
                  lineHeight: 1.6,
                }}
              >
                {disclaimer}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

IBCommissionEstimatorMock.defaultProps = {
  eyebrow: "IB PARTNER MOCK",
  title: "จำลองวิธีคิดรายได้พาร์ทเนอร์แบบไม่ใช่ข้อมูลจริง",
  description:
    "Component นี้ใช้สื่อสาร logic ของ estimator เท่านั้น ตัวเลขจริงและเงื่อนไขโปรแกรมต้องรอการอนุมัติ",
  inputs: defaultInputs,
  outputLabel: "Estimated commission",
  outputValue: "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่",
  disclaimer:
    "ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับเงื่อนไขโปรแกรม ปริมาณการเทรดจริง และการอนุมัติจากบริษัท",
  mockOnly: true,
  primaryBlue: "#0040C1",
  riskAmber: "#B45309",
};

addPropertyControls(IBCommissionEstimatorMock, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "IB PARTNER MOCK",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "จำลองวิธีคิดรายได้พาร์ทเนอร์แบบไม่ใช่ข้อมูลจริง",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Component นี้ใช้สื่อสาร logic ของ estimator เท่านั้น ตัวเลขจริงและเงื่อนไขโปรแกรมต้องรอการอนุมัติ",
  },
  inputs: {
    type: ControlType.Array,
    title: "Inputs",
    maxCount: 4,
    defaultValue: defaultInputs,
    control: {
      type: ControlType.Object,
      controls: {
        label: { type: ControlType.String, title: "Label" },
        placeholder: { type: ControlType.String, title: "Placeholder" },
      },
    },
  },
  outputLabel: {
    type: ControlType.String,
    title: "Output Label",
    defaultValue: "Estimated commission",
  },
  outputValue: {
    type: ControlType.String,
    title: "Output Value",
    defaultValue: "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่",
  },
  disclaimer: {
    type: ControlType.String,
    title: "Disclaimer",
    displayTextArea: true,
    defaultValue:
      "ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับเงื่อนไขโปรแกรม ปริมาณการเทรดจริง และการอนุมัติจากบริษัท",
  },
  mockOnly: {
    type: ControlType.Boolean,
    title: "Mock",
    defaultValue: true,
    enabledTitle: "On",
    disabledTitle: "Off",
  },
  primaryBlue: {
    type: ControlType.Color,
    title: "Primary",
    defaultValue: "#0040C1",
  },
  riskAmber: {
    type: ControlType.Color,
    title: "Risk",
    defaultValue: "#B45309",
  },
});
