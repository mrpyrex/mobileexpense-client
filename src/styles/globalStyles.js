import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

  text: {
    fontSize: 15,
    paddingVertical: 10
  },

  gradientContainer: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
    
  },

  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 3
  }
    
 
});
