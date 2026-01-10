import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerLeft: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  locationText: {
    fontSize: 14,
    color: '#CBD5E1',
  },
  notificationButton: {
    position: 'relative',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#F97316',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#F97316',
    fontSize: 18,
    fontWeight: '600',
  },
  innerContainer: {
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E293B',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signInLink: {
    color: '#F97316',
    fontSize: 16,
    marginTop: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#F97316',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#F97316',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  fssaiContainer: {
    marginBottom: 20,
  },
  fssaiButtons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fssaiButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  fssaiButtonSelected: {
    backgroundColor: '#F97316',
  },
  fssaiButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#F97316',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  bankSelectionInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E293B',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bankSelectionText: {
    color: '#FFFFFF',
  },
  bankSelectionTextPlaceholder: {
    color: '#999',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  detailSection: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  detailLabel: {
    fontSize: 16,
    color: '#CBD5E1',
    fontWeight: '500',
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    flex: 2,
    textAlign: 'right',
  },
});
