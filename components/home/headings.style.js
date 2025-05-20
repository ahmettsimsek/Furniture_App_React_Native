import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: { // Dış kapsayıcıya üstten ve yataydan boşluk veriyoruz
        marginTop: SIZES.small, // Üstten boşluk
        marginHorizontal: 12   // Sağ ve soldan boşluk
    },
    header: { // Başlık satırını yatayda ikiye bölüyoruz (başlık ve ikon)
        flexDirection: 'row',   // Öğeleri yatay olarak sıralar
        justifyContent:'space-between'  // Aralarındaki boşluğu maksimum yapar
    },
    headerTitle: {  // Başlık yazısının stilini belirliyoruz
        fontFamily: "semibold", // Yarı kalın bir yazı tipi kullan
        fontSize: SIZES.xLarge - 2 // Büyük puntoda yazı (biraz küçültülmüş)
    }
})

export default styles;