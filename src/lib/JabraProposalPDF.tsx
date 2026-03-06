import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Branding colors
const colors = {
  navy: "#0f171f",
  orange: "#f46c42",
  gold: "#c59f4d",
  cream: "#efd6bd",
  creamLight: "rgba(239, 214, 189, 0.7)",
  creamMuted: "rgba(239, 214, 189, 0.5)",
};

// Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.navy,
    padding: 40,
    fontFamily: "Helvetica",
    position: "relative",
  },
  // Cover page
  coverPage: {
    backgroundColor: colors.navy,
    padding: 40,
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  coverTopLeft: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
  },
  coverCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  coverTitle: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    textAlign: "center",
    marginBottom: 12,
  },
  coverSubtitle: {
    fontSize: 16,
    color: colors.creamLight,
    textAlign: "center",
    marginBottom: 24,
  },
  coverRule: {
    width: "100%",
    height: 2,
    backgroundColor: colors.orange,
    marginTop: 24,
  },
  coverFooter: {
    fontSize: 10,
    color: colors.creamMuted,
    textAlign: "center",
  },
  // Section elements
  sectionLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    letterSpacing: 2,
    marginBottom: 8,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    marginBottom: 16,
  },
  body: {
    fontSize: 10,
    color: colors.cream,
    lineHeight: 1.6,
    marginBottom: 20,
  },
  // Stat boxes
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    gap: 12,
  },
  statBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.orange,
    padding: 16,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 8,
    color: colors.cream,
    textAlign: "center",
  },
  // Two columns
  twoColumns: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  column: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(239, 214, 189, 0.05)",
    borderRadius: 4,
  },
  columnTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 10,
    color: colors.cream,
    marginBottom: 6,
    lineHeight: 1.4,
  },
  // Deliverables
  deliverableItem: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  deliverableBullet: {
    width: 6,
    height: 6,
    backgroundColor: colors.orange,
    borderRadius: 3,
    marginTop: 4,
    marginRight: 12,
  },
  deliverableText: {
    flex: 1,
    fontSize: 10,
    color: colors.cream,
    lineHeight: 1.5,
  },
  // Phase boxes
  phaseContainer: {
    marginTop: 20,
  },
  phaseBox: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "rgba(239, 214, 189, 0.05)",
    borderLeftWidth: 3,
    borderLeftColor: colors.orange,
  },
  phaseTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 4,
  },
  phaseSubtitle: {
    fontSize: 9,
    color: colors.creamLight,
    marginBottom: 8,
  },
  phaseDescription: {
    fontSize: 10,
    color: colors.cream,
    lineHeight: 1.5,
  },
  // Panel
  convenerBlock: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: "rgba(244, 108, 66, 0.1)",
    borderLeftWidth: 3,
    borderLeftColor: colors.orange,
  },
  convenerName: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    marginBottom: 4,
  },
  convenerRole: {
    fontSize: 10,
    color: colors.creamLight,
    marginBottom: 8,
  },
  convenerBio: {
    fontSize: 9,
    color: colors.cream,
    lineHeight: 1.5,
  },
  subheading: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    marginBottom: 12,
    marginTop: 8,
  },
  panelistsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  panelistCard: {
    width: "48%",
    padding: 12,
    backgroundColor: "rgba(239, 214, 189, 0.05)",
    borderRadius: 4,
    marginBottom: 4,
  },
  panelistName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    marginBottom: 2,
  },
  panelistRole: {
    fontSize: 8,
    color: colors.creamLight,
    marginBottom: 2,
  },
  panelistRegion: {
    fontSize: 8,
    color: colors.orange,
  },
  // Pricing tiers
  tiersContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  tierBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(239, 214, 189, 0.05)",
    borderRadius: 4,
  },
  tierBoxGold: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(244, 108, 66, 0.1)",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.orange,
  },
  tierBadge: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    backgroundColor: colors.orange,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  tierName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 4,
  },
  tierSubname: {
    fontSize: 8,
    color: colors.creamLight,
    marginBottom: 8,
  },
  tierPrice: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.cream,
    marginBottom: 4,
  },
  tierDuration: {
    fontSize: 8,
    color: colors.creamLight,
    marginBottom: 12,
  },
  tierDeliverables: {
    fontSize: 8,
    color: colors.cream,
    lineHeight: 1.5,
  },
  // About page
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.creamMuted,
    marginVertical: 24,
  },
  contactBlock: {
    marginTop: 16,
  },
  contactText: {
    fontSize: 10,
    color: colors.cream,
    marginBottom: 4,
  },
  contactHighlight: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 4,
  },
  finalFooter: {
    marginTop: 24,
    fontSize: 8,
    color: colors.creamMuted,
    fontStyle: "italic",
  },
  // Page footer
  pageFooter: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 0.5,
    borderTopColor: colors.orange,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: colors.creamMuted,
  },
});

// Footer component for pages 2-8
const PageFooter = ({ pageNumber }: { pageNumber: number }) => (
  <View style={styles.pageFooter} fixed>
    <Text style={styles.footerText}>
      ThreePoint Labs — Jabra Voice AI Research Programme
    </Text>
    <Text style={styles.footerText}>{pageNumber}</Text>
  </View>
);

// Cover Page
const CoverPage = () => (
  <Page size="A4" style={styles.coverPage}>
    <Text style={styles.coverTopLeft}>ThreePoint Labs</Text>
    <View style={styles.coverCenter}>
      <Text style={styles.coverTitle}>Voice AI Research Programme</Text>
      <Text style={styles.coverSubtitle}>
        A Strategic Partnership Proposal for Jabra
      </Text>
      <View style={styles.coverRule} />
    </View>
    <Text style={styles.coverFooter}>
      Prepared exclusively for Jabra | Confidential | 2026
    </Text>
  </Page>
);

// Page 2 - The Market Moment
const MarketMomentPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>MARKET CONTEXT</Text>
    <Text style={styles.heading}>
      Voice AI is Reshaping the Competitive Landscape
    </Text>
    <Text style={styles.body}>
      The voice AI market is projected to reach $50B by 2029, growing at 23.7%
      CAGR. 67% of enterprise technology decisions now involve voice interface
      evaluation. Jabra sits at a unique inflection point — trusted hardware
      brand, strong enterprise relationships, but no authoritative voice in the
      AI conversation that will define the next decade of work technology.
    </Text>
    <View style={styles.statsRow}>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>$50B</Text>
        <Text style={styles.statLabel}>Market by 2029</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>23.7%</Text>
        <Text style={styles.statLabel}>CAGR</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>67%</Text>
        <Text style={styles.statLabel}>
          of enterprise tech decisions involve voice AI
        </Text>
      </View>
    </View>
    <PageFooter pageNumber={2} />
  </Page>
);

// Page 3 - The Gap
const TheGapPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>THE OPPORTUNITY</Text>
    <Text style={styles.heading}>Where Jabra Could Lead</Text>
    <Text style={styles.body}>
      Your competitors are racing to establish thought leadership in voice AI.
      McKinsey, Deloitte, and BCG are producing annual reports that shape
      enterprise buying decisions. Jabra has the credibility, the data, and the
      customer relationships to own this conversation — but needs a structured
      research programme to get there.
    </Text>
    <View style={styles.twoColumns}>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>The Risk of Waiting</Text>
        <Text style={styles.bulletPoint}>• Brand credibility gap widens</Text>
        <Text style={styles.bulletPoint}>• Losing narrative control to competitors</Text>
        <Text style={styles.bulletPoint}>• Competitor research filling the void</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.columnTitle}>The Opportunity</Text>
        <Text style={styles.bulletPoint}>• First-mover advantage in voice AI thought leadership</Text>
        <Text style={styles.bulletPoint}>• 12-month head start on competitors</Text>
        <Text style={styles.bulletPoint}>• Proprietary data as competitive moat</Text>
      </View>
    </View>
    <PageFooter pageNumber={3} />
  </Page>
);

// Page 4 - What This Delivers
const DeliversPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>PROGRAMME OUTCOMES</Text>
    <Text style={styles.heading}>Five Strategic Deliverables</Text>
    <View style={{ marginTop: 8 }}>
      <View style={styles.deliverableItem}>
        <View style={styles.deliverableBullet} />
        <Text style={styles.deliverableText}>
          Proprietary Voice AI @ Work Research Report (annual, with quarterly
          updates)
        </Text>
      </View>
      <View style={styles.deliverableItem}>
        <View style={styles.deliverableBullet} />
        <Text style={styles.deliverableText}>
          Global Expert Panel — Copenhagen Workshop + New York Summit
        </Text>
      </View>
      <View style={styles.deliverableItem}>
        <View style={styles.deliverableBullet} />
        <Text style={styles.deliverableText}>
          Executive Briefing Series — tailored for enterprise customers and
          press
        </Text>
      </View>
      <View style={styles.deliverableItem}>
        <View style={styles.deliverableBullet} />
        <Text style={styles.deliverableText}>
          Jabra Voice AI Index — recurring benchmark metric (owned by Jabra)
        </Text>
      </View>
      <View style={styles.deliverableItem}>
        <View style={styles.deliverableBullet} />
        <Text style={styles.deliverableText}>
          Strategic Content Programme — whitepapers, keynote content, media
          amplification
        </Text>
      </View>
    </View>
    <PageFooter pageNumber={4} />
  </Page>
);

// Page 5 - The Programme
const ProgrammePage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>THE PROGRAMME</Text>
    <Text style={styles.heading}>A 12-Month Research Journey</Text>
    <View style={styles.phaseContainer}>
      <View style={styles.phaseBox}>
        <Text style={styles.phaseTitle}>Phase 1: Foundation & Baseline</Text>
        <Text style={styles.phaseSubtitle}>Months 1–3</Text>
        <Text style={styles.phaseDescription}>
          Market scoping, panel assembly, baseline research design, initial data
          collection
        </Text>
      </View>
      <View style={styles.phaseBox}>
        <Text style={styles.phaseTitle}>Phase 2: Deep Research</Text>
        <Text style={styles.phaseSubtitle}>Months 4–8</Text>
        <Text style={styles.phaseDescription}>
          Global survey (5 markets), expert interviews, Copenhagen Workshop,
          interim report
        </Text>
      </View>
      <View style={styles.phaseBox}>
        <Text style={styles.phaseTitle}>Phase 3: Synthesis & Launch</Text>
        <Text style={styles.phaseSubtitle}>Months 9–12</Text>
        <Text style={styles.phaseDescription}>
          Final analysis, New York Summit, annual report, media rollout, Jabra
          Voice AI Index launch
        </Text>
      </View>
    </View>
    <PageFooter pageNumber={5} />
  </Page>
);

// Page 6 - The Panel
const PanelPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>EXPERT PANEL</Text>
    <Text style={styles.heading}>World-Class Expertise</Text>
    <Text style={styles.subheading}>Programme Convener & Chair</Text>
    <View style={styles.convenerBlock}>
      <Text style={styles.convenerName}>James Poulter</Text>
      <Text style={styles.convenerRole}>
        Founder, ThreePoint Labs | Author, AI @ Work (Bloomsbury, 2026)
      </Text>
      <Text style={styles.convenerBio}>
        One of the UK's most sought-after AI strategists with 20+ years in
        digital transformation and 250+ keynotes delivered globally. Trusted
        advisor to Amazon, Verizon, LEGO, Bosch, and Universal Music.
      </Text>
    </View>
    <Text style={styles.subheading}>Panel Members</Text>
    <View style={styles.panelistsGrid}>
      <View style={styles.panelistCard}>
        <Text style={styles.panelistName}>Saba Akhtar</Text>
        <Text style={styles.panelistRole}>Conversational AI & Voice UX Expert</Text>
        <Text style={styles.panelistRegion}>Europe</Text>
      </View>
      <View style={styles.panelistCard}>
        <Text style={styles.panelistName}>Pete Erickson</Text>
        <Text style={styles.panelistRole}>Founder, VOICE Summit</Text>
        <Text style={styles.panelistRegion}>United States</Text>
      </View>
      <View style={styles.panelistCard}>
        <Text style={styles.panelistName}>Noelle Russell</Text>
        <Text style={styles.panelistRole}>AI Solutions Lead, Accenture</Text>
        <Text style={styles.panelistRegion}>United States</Text>
      </View>
      <View style={styles.panelistCard}>
        <Text style={styles.panelistName}>Susan Westwater</Text>
        <Text style={styles.panelistRole}>Co-author, Voice Strategy</Text>
        <Text style={styles.panelistRegion}>United States</Text>
      </View>
      <View style={styles.panelistCard}>
        <Text style={styles.panelistName}>Toby Walsh</Text>
        <Text style={styles.panelistRole}>Professor of AI, UNSW Sydney</Text>
        <Text style={styles.panelistRegion}>APAC</Text>
      </View>
    </View>
    <PageFooter pageNumber={6} />
  </Page>
);

// Page 7 - Investment Tiers
const InvestmentPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>INVESTMENT</Text>
    <Text style={styles.heading}>Choose Your Level</Text>
    <View style={styles.tiersContainer}>
      <View style={styles.tierBox}>
        <Text style={styles.tierName}>BRONZE</Text>
        <Text style={styles.tierSubname}>Foundation</Text>
        <Text style={styles.tierPrice}>£95,000</Text>
        <Text style={styles.tierDuration}>3 months</Text>
        <Text style={styles.tierDeliverables}>
          • Baseline research report{"\n"}• 1 market{"\n"}• 2 expert panel
          sessions
        </Text>
      </View>
      <View style={styles.tierBox}>
        <Text style={styles.tierName}>SILVER</Text>
        <Text style={styles.tierSubname}>Growth</Text>
        <Text style={styles.tierPrice}>£215,000</Text>
        <Text style={styles.tierDuration}>12 months</Text>
        <Text style={styles.tierDeliverables}>
          • All Bronze deliverables{"\n"}• Copenhagen Workshop{"\n"}• 2 markets
          {"\n"}• Interim report
        </Text>
      </View>
      <View style={styles.tierBoxGold}>
        <Text style={styles.tierBadge}>RECOMMENDED</Text>
        <Text style={styles.tierName}>GOLD</Text>
        <Text style={styles.tierSubname}>Full Programme</Text>
        <Text style={styles.tierPrice}>£419,500</Text>
        <Text style={styles.tierDuration}>12 months</Text>
        <Text style={styles.tierDeliverables}>
          • All Silver deliverables{"\n"}• New York Summit{"\n"}• 5 markets
          {"\n"}• Jabra Voice AI Index{"\n"}• Quarterly updates{"\n"}• Full
          media amplification
        </Text>
      </View>
    </View>
    <PageFooter pageNumber={7} />
  </Page>
);

// Page 8 - About & Next Steps
const AboutPage = () => (
  <Page size="A4" style={styles.page}>
    <Text style={styles.sectionLabel}>YOUR PARTNER</Text>
    <Text style={styles.heading}>ThreePoint Labs</Text>
    <Text style={styles.body}>
      ThreePoint Labs is an AI transformation consultancy founded by James
      Poulter — one of the UK's most sought-after AI strategists. With 20+ years
      in digital transformation and 250+ keynotes delivered globally, ThreePoint
      brings both the strategic credibility and the operational expertise to run
      a programme of this scale. Trusted by Amazon, Verizon, LEGO, Bosch,
      Bloomsbury, and Universal Music.
    </Text>
    <View style={styles.divider} />
    <Text style={styles.sectionLabel}>NEXT STEPS</Text>
    <Text style={styles.body}>
      To proceed or discuss further, please contact:
    </Text>
    <View style={styles.contactBlock}>
      <Text style={styles.contactHighlight}>
        James Poulter | jp@threepoint.io | threepoint.io
      </Text>
      <Text style={styles.contactText}>
        Programme coordination: Jemma | jemma@poulterventures.com
      </Text>
    </View>
    <Text style={styles.finalFooter}>
      All prices exclude VAT. This proposal is confidential and prepared
      exclusively for Jabra.
    </Text>
    <PageFooter pageNumber={8} />
  </Page>
);

// Main Document
export const JabraProposalPDF = () => (
  <Document
    title="Jabra Voice AI Research Programme Proposal"
    author="ThreePoint Labs"
    subject="Strategic Partnership Proposal"
    keywords="Voice AI, Jabra, Research, ThreePoint Labs"
  >
    <CoverPage />
    <MarketMomentPage />
    <TheGapPage />
    <DeliversPage />
    <ProgrammePage />
    <PanelPage />
    <InvestmentPage />
    <AboutPage />
  </Document>
);

export default JabraProposalPDF;
