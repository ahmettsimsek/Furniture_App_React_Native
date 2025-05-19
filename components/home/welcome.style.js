import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: ' 100% '
    },
    welcomeTxt: (color, top) => ({
         fontFamily: "bold",
        fontSize: SIZES.xxLarge -6,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small
    }),
    searchContainer: {
        flexDirection: 'row',  // Öğeleri yatayda sıralamak için (yani yan yana dizmek)
        justifyContent: 'center', // Öğeleri yatay eksende ortalamak
        alignItems: 'center',    // Öğeleri dikey eksende ortalamak
        backgroundColor: COLORS.secondary, // Arka plan rengini ikincil renk olarak ayarlamak
        borderRadius: SIZES.medium,     // Köşeleri yuvarlatmak (orta büyüklükte)
        marginVertical: SIZES.medium,  // Üst ve alt boşluk (orta büyüklükte)
        height: 50,         // Sabit yükseklik belirlemek
        marginHorizontal: SIZES.small // Sağ ve sol boşluk (küçük büyüklükte)
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,

    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: COLORS.primary
    }
       
    
})

export default styles