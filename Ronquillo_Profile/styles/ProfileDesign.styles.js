import { StyleSheet } from 'react-native'

const design = StyleSheet.create({
  profileCard: {
    backgroundColor: '#ffe4ec', // slightly darker pink base
    borderRadius: 20,
    overflow: 'hidden',
    margin: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  headerArea: {
    height: 150,
    backgroundColor: '#ffcce0', // darker pastel pink header
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heartOne: {
    fontSize: 70,
    color: '#f38bb4', // deeper pastel pink
    position: 'absolute',
    top: 10,
    left: 20,
    opacity: 0.65,
  },
  heartTwo: {
    fontSize: 55,
    color: '#ec6f9f',
    position: 'absolute',
    bottom: -10,
    right: 30,
    opacity: 0.75,
  },
  heartThree: {
    fontSize: 45,
    color: '#e7548b',
    position: 'absolute',
    bottom: 20,
    left: 60,
    opacity: 0.55,
  },
  profileContent: {
    alignItems: 'center',
    padding: 20,
  },
  picWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -70,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#f38bb4', // darker pastel border
  },
  profilePic: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  profileFullname: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#b31258', // strong pink for name
    marginTop: 8,
    marginBottom: 6,
  },
  profileUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#921046', // darker shade for username
    marginBottom: 6,
  },
  profileAbout: {
    fontSize: 15,
    color: '#6e0c34', // readable deep rose
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 25,
    lineHeight: 21,
  },
  profileCourse: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a8144e',
    marginTop: 6,
  },
  infoDivider: {
    width: '80%',
    height: 1,
    backgroundColor: '#f38bb4', // deeper pink divider
    marginVertical: 8,
    borderRadius: 2,
  },
  cloudOne: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 90,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    opacity: 0.9,
  },
  cloudTwo: {
    position: 'absolute',
    top: 70,
    right: 50,
    width: 110,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    opacity: 0.85,
  },
})

export default design
