const quotes = [{
    quote: `"Hiçbir şeyden vazgeçme, çünkü sadece kaybedenler vazgeçer."`,
    writer: `-Abraham Lincoln`
},{
    quote: `"Kazanma isteği ve başarıya ulaşma arzusu birleşirse kişisel mükemmelliğin kapısını açar."`,
    writer: `-Konfüçyüs`
},{
    quote: `"Fırsatlar durup dururken karşınıza çıkmaz, onları siz yaratırsınız."`,
    writer: `-Chris Grosser`
},{
    quote: `"Başarıya çıkan asansör bozuk. Bekleyerek zaman kaybetmeyin, adım adım merdivenleri çıkmaya başlayın."`,
    writer: `-Joe Girard`
},{
    quote: `"Şansa çok inanırım ve ne kadar çok çalıştıysam ona o kadar çok sahip oldum."`,
    writer: `-Thomas Jefferson`
},{
    quote: `"Bir şeye başlayıp başarısız olmaktan daha kötü tek şey hiçbir şeye başlamamaktır."`,
    writer: `-Seth Godin`
},{
    quote: `"Sadece sınırlarını aşmanın riskini alanlar ne kadar ileri gidebildiklerini görürler."`,
    writer: `Stephen Hawking`
},{
    quote: `"Bir şeyi başarmak ne kadar zorsa, zaferin tadı o kadar güzeldir."`,
    writer: `-Pele`
},{
    quote: `"Hiç kimse başarı merdivenine elleri cebinde tırmanmamıştır."`,
    writer: `-J. Keth Moorhead`
},{
    quote: `"Ne zaman başarılı bir iş görseniz, birisi bir zamanlar mutlaka cesur bir karar almıştır."`,
    writer: `-Peter Ducker`
},{
    quote: `"Sessizce sıkı çalışın, bırakın başarı sesiniz olsun."`,
    writer: `-Frank Ocean`
},{
    quote: `"Sadece başarılı bir insan olmaya değil, değerli bir insan olmaya çalışın."`,
    writer: `-Albert Einstein`
},{
    quote: `"Zafer, zafer benimdir diyebilenindir. Başarı ise “başaracağım” diye başlayarak sonunda “başardım diyenindir."`,
    writer: `-Mustafa Kemal ATATÜRK`
}
]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerHTML =quotes[random].quote;

    writer.innerHTML =quotes[random].writer;
})
