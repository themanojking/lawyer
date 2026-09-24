import { Box, Typography } from "@mui/material";
import { ACCENT } from "../Theme";

/**
 * Reusable section heading: small accent label + large bold title.
 *
 * <SectionTitle eyebrow="Archivements" title="We Have Trust From 15 Years Operation" />
 * <SectionTitle eyebrow="Our Services" title="What We Do" align="center" light />
 *
 * Props:
 *  - eyebrow   small label above the title (optional)
 *  - title     main heading text
 *  - align     "left" | "center" | "right"   (default "left")
 *  - light     true for dark backgrounds (white title)
 *  - maxWidth  max width of the title in px  (default 680)
 *  - component heading tag for SEO           (default "h2")
 *  - sx        extra styles for the wrapper
 */
export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  light = false,
  maxWidth = 680,
  component = "h2",
  sx,
}) {
  const centered = align === "center";
  return (
    <Box
      sx={{
        textAlign: align,
        mb: 3,
        ...(centered && { mx: "auto", maxWidth }),
        ...sx,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: ACCENT,
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        component={component}
        sx={{
          color: light ? "#fff" : "#241c19",
          fontWeight: 700,
          lineHeight: 1.3,
          fontSize: { xs: 32, sm: 40, md: 46 },
          maxWidth,
          ...(centered && { mx: "auto" }),
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
