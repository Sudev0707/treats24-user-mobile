import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const LiveTrackOrderScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
  },
  shareButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.bgOffWhiteSecondary,
  },
  // Live Map Card
  mapCard: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapGridLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapGridLine: {
    width: '25%',
    height: '25%',
    borderWidth: 0.5,
    borderColor: 'rgba(76, 175, 80, 0.2)',
  },
  mapText: {
    fontSize: 18,
    fontFamily: fonts.family.semibold,
    color: colors.brandPrimary,
    marginTop: 8,
    zIndex: 1,
  },
  mapSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    zIndex: 1,
  },
  liveIndicator: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#32CD32',
    marginRight: 6,
  },
  liveText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: fonts.family.semibold,
  },
  // Status Card
  statusCard: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomRightRadius: 8,
  },
  statusText: {
    color: '#FFF',
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
    marginLeft: 6,
  },
  estimatedTime: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
  },
  // Progress Tracker - Enhanced Real App Style
  trackerContainer: {
    marginVertical: 8,
  },
  trackerStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  trackerStepContent: {
    flex: 1,
    marginLeft: 16,
    paddingBottom: 16,
  },
  trackerDot: {
    width: 20,
    height: 20,
    borderRadius: 14,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  trackerDotActive: {
    backgroundColor: colors.brandPrimary,
  },
  trackerDotCompleted: {
    backgroundColor: colors.brandPrimary,
  },
  trackerDotPending: {
    backgroundColor: '#e0e0e0',
  },
  trackerDotCurrent: {
    backgroundColor: colors.brandPrimary,
    borderWidth: 3,
    borderColor: colors.brandPrimary + '40',
  },
  trackerLine: {
    position: 'absolute',
    top: 28,
    left: 9,
    width: 2,
    backgroundColor: '#e0e0e0',
    zIndex: 0,
  },
  trackerLineActive: {
    backgroundColor: colors.brandPrimary,
  },
  trackerLineCompleted: {
    backgroundColor: colors.brandPrimary,
  },
  trackerLinePending: {
    backgroundColor: '#e0e0e0',
  },
  trackerLabelsContainer: {
    // Keeping for compatibility
  },
  trackerText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    color: '#6d6d6d',
  },
  trackerTextActive: {
    color: colors.brandPrimary,
    fontFamily: fonts.family.semibold,
  },
  trackerTextCompleted: {
    color: colors.brandPrimary,
    fontFamily: fonts.family.semibold,
  },
  trackerTextPending: {
    color: '#a0a0a0',
    fontFamily: fonts.family.regular,
  },
  trackerTextCurrent: {
    color: colors.brandPrimary,
    fontFamily: fonts.family.bold,
  },
  // Enhanced step details
  trackerStepTitle: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  trackerStepTitleCompleted: {
    color: colors.brandPrimary,
  },
  trackerStepTitleCurrent: {
    color: colors.brandPrimary,
  },
  trackerStepTitlePending: {
    color: '#a0a0a0',
  },
  trackerStepDescription: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: '#666',
    marginTop: 2,
  },
  trackerStepTime: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: '#888',
    marginTop: 4,
  },
  trackerStepTimeCompleted: {
    color: colors.brandPrimary,
  },
  // Horizontal tracker (keep for compatibility)
  trackerHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  trackerHorizontalStep: {
    flex: 1,
    alignItems: 'center',
  },
  trackerHorizontalDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackerHorizontalDotActive: {
    backgroundColor: colors.brandPrimary,
  },
  trackerHorizontalLine: {
    position: 'absolute',
    top: 12,
    left: '50%',
    width: '100%',
    height: 2,
    backgroundColor: '#e0e0e0',
    zIndex: -1,
  },
  trackerHorizontalLineActive: {
    backgroundColor: colors.brandPrimary,
  },
  trackerHorizontalLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  trackerHorizontalText: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.regular,
    color: '#6d6d6d',
    textAlign: 'center',
    flex: 1,
  },
  trackerHorizontalTextActive: {
    color: colors.brandPrimary,
    fontFamily: fonts.family.semibold,
  },
  // Delivery Partner Card
  deliveryPartnerCard: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  deliveryPartnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  deliveryPartnerPhoto: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.brandPrimary,
  },
  deliveryPartnerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  deliveryPartnerName: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
  },
  deliveryPartnerSubtext: {
    fontSize: fonts.size.sm,
    color: '#666',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    fontFamily: fonts.family.medium,
  },
  deliveryPartnerActions: {
    flexDirection: 'row',
  },
  actionIconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.brandPrimary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  actionButtonText: {
    marginTop: 4,
    fontSize: 10,
    color: colors.brandPrimary,
    fontFamily: fonts.family.medium,
  },
  // Restaurant Info Card
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 12,
  },
  restaurantName: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
  },
  orderId: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: '#666',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  // Address Card
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  addressLabel: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
  },
  addressText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: '#666',
    marginTop: 4,
    lineHeight: 20,
  },
  // Order Items
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemTypeIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  itemName: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    color: colors.textPrimary,
    flex: 1,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginRight: 16,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    minWidth: 50,
    textAlign: 'right',
  },
  viewMoreText: {
    fontSize: fonts.size.sm,
    color: colors.brandPrimary,
    fontFamily: fonts.family.medium,
    marginTop: 8,
    textAlign: 'center',
  },
  // Bottom Action Bar
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  bottomBarLeft: {
    flex: 1,
  },
  bottomBarTotalLabel: {
    fontSize: fonts.size.sm,
    color: '#666',
    fontFamily: fonts.family.regular,
  },
  bottomBarTotal: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
  },
  bottomBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bottomBarButtonText: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semibold,
    color: '#FFF',
    marginLeft: 8,
  },
  bottomPadding: {
    height: 20,
  },
  // ETA Badge
  etaContainer: {
    backgroundColor: colors.brandPrimary + '20',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 12,
  },
  etaText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
    color: colors.brandPrimary,
    textAlign: 'center',
  },
  etaTimeText: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.bold,
    color: colors.brandPrimary,
    textAlign: 'center',
    marginTop: 2,
  },
});

export default LiveTrackOrderScreenStyles;
