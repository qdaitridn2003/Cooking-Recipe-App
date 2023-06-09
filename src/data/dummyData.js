const { Recipe } = require('./models/Recipe');
const { Material } = require('./models/Material');
const { Type } = require('./models/Type');
const { Guide } = require('./models/Guide');

// Types
const breakfast = new Type(0, 'Ăn Sáng');
const appetizer = new Type(1, 'Khai Vị');
const mainDishes = new Type(2, 'Món Chính');
const sideDishes = new Type(3, 'Món Ăn Kèm');
const dessert = new Type(4, 'Tráng Miệng');
const drink = new Type(5, 'Đồ Uống');

// Materials
const bread = new Material(0, 'Bánh Mỳ');
const sugar = new Material(1, 'Đường');
const butter = new Material(2, 'Bơ');
const milk = new Material(3, 'Sữa');
const vani = new Material(4, 'Tinh Chất Vani');
const chicken = new Material(5, 'Gà');
const vegetable = new Material(6, 'Rau');
const lemongrass = new Material(7, 'Sả');
const chilli = new Material(8, 'Ớt');
const garlic = new Material(9, 'Tỏi');
const fishsauce = new Material(10, 'Nước Mắm');
const oil = new Material(11, 'Dầu Ăn');
const salt = new Material(12, 'Muối');
const noodles = new Material(13, 'Mỳ Quảng');
const beef = new Material(14, 'Thịt Bò');
const banana = new Material(15, 'Chuối');
const starfruit = new Material(16, 'Khế');
const pepper = new Material(17, 'Tiêu');
const lemon = new Material(18, 'Chanh');
const pineapple = new Material(19, 'Dứa / Thơm / Khóm');
const onion = new Material(20, 'Hành Tây');
const carrot = new Material(21, 'Cà Rốt');
const peanuts = new Material(22, 'Đậu Phộng');
const crab = new Material(23, 'Cua');
const egg = new Material(24, 'Trứng Gà');
const mushroom = new Material(25, 'Nấm');
const water = new Material(26, 'Nước');
const tapiocaPowder = new Material(27, 'Bột Năng');
const rice = new Material(28, 'Gạo');
const turmeric = new Material(29, 'Nghệ');
const ginger = new Material(30, 'Gừng');
const squid = new Material(31, 'Mực');
const shrimp = new Material(32, 'Tôm');
const friedDough = new Material(33, 'Bột Chiên Giòn');
const coconutMilk = new Material(34, 'Nước Cốt Dừa');
const wine = new Material(35, 'Rượu');
const apple  = new Material(36, 'Táo');
const orange = new Material(37, 'Cam');
const mango = new Material(38, 'Xoài');
const watermelon = new Material(39, 'Dưa Hấu');
const longan = new Material(40, 'Nhãn');
const grape = new Material(41, 'Nho');
const strongBow = new Material(42, 'Strong Bow');
const kiwi = new Material(43, 'Kiwi');
const sevenUp = new Material(44, '7 Up');
const pennywort = new Material(45, 'Rau Má');
const ice = new Material(46, 'Đá Lạnh');

// id, name, mass
// step, content
const breadMaterial = [bread, sugar, butter, milk, vani];
const breadGuide = [new Guide('Bước 1 ', 'Đập trứng cho ra đĩa sâu lòng, thêm sữa béo, tinh chất vani vào, đánh tan đều. Sau đó, nhúng lần lượt những lát bánh mì sandwich vào trứng, để yên khoảng 1 phút cho ngấm đều.'),
                    new Guide('Bước 2 ', 'Đun tan chảy ít bơ trong chảo chống dính sao cho vừa đủ láng mặt chảo. Đặt từng miếng bánh mì sandwich đã nhúng trứng vào chiên với lửa nhỏ vừa cho chín đều 2 mặt thì vớt ra.'),
                    new Guide('Bước 3 ', 'Bánh mì sandwich chiên bơ trứng đơn giản, chế biến nhanh gọn. Chỉ chưa đầy 10 phút chế biến bạn có thể hoàn thành bánh mì chiên ngon thơm cho 2 người ăn rồi nhé! Có thể chấm cùng với sốt mayonnasie. Uống ly sữa nóng nữa là tuyệt.')
                ];

const noodlesMaterial = [noodles, chicken, vegetable, lemongrass, chilli, garlic, salt, fishsauce, lemon, oil, sugar];
const noodlesGuide = [new Guide('Bước 1 ', 'Gà mua về làm sạch, sau đó lọc xương rồi xắt thành những miếng vừa ăn. Thịt và xương để riêng ra với nhau. Tỏi lột vỏ băm nhuyễn, hành khô lột vỏ cắt lát, ớt đập dập. Gừng thái sợ, ớt đập dập nguyên trái.'),
                      new Guide('Bước 2 ', 'Cho thịt gà vào 1 cái tô, cho vào một ít tỏi băm, hành khô, ớt vào trộn đều. Ướp thêm với nước mắm, chút đường, hạt tiêu, bột ngọt, muối. Trộn đều tất cả nguyên liệu và ướp trong khoảng 30 phút.'),
                      new Guide('Bước 3 ', 'Cho xương gà vào một cái nồi và hầm trong khoảng 20 phút để lấy nước dùng. Đặt 1 cái chảo lên bếp cùng với một ít dầu ăn, cho tỏi băm vào phi đến vàng thơm. Cho phần thịt gà đã ướp vào đảo đều. Sau đó cho 1 lít nước dùng vào. Khi thịt gà đã mềm, bạn tiến hành nêm nếm lại gia vị cho vừa miệng thì tắt bếp.'),
                      new Guide('Bước 4 ', 'Bạn xếp rau các loại vào một cái đĩa, sau đó, cho mì quảng vào một cái tô, lần lượt xếp vào tô rau, giá, trứng cút, thịt gà, bánh đa và đậu phộng. Cuối cùng, rưới một ít nước gà vào tô, vậy là có thể thưởng thức rồi đấy.'),
                      new Guide('Bước 5 ', 'Khi ăn thì các bạn vắt thêm miếng chanh, thêm xíu nước mắm ngon, bánh đa bẻ nhỏ rồi trộn đều và thưởng thức.'),
                    ];

const beefMaterial = [beef, banana, pineapple, starfruit, onion, peanuts, vegetable,]
const beefGuide = [new Guide('Bước 1 ', 'Đầu tiên, bạn thái 300g thịt bò thật mỏng rồi để ra dĩa. Cà rốt bằng cách gọt vỏ, chuối và khế cắt bỏ gân, vỏ của 2 quả chuối chát cùng với 2 quả khế và thái thành từng khoanh tròn. Rửa sạch rau'),
                      new Guide('Bước 2 ', 'Bạn cho vào tô lớn 1 muỗng nước cốt chanh, 2 muỗng nước mắm, 2 muỗng canh đường rồi đánh đều hỗn hợp cho tan đường.'),
                      new Guide('Bước 3 ', 'Bạn cần ướp thịt bò đã cắt nhỏ với ½ muỗng canh tỏi băm, ½ muỗng canh tiêu, ½ muỗng cà phê muối và 1 muỗng canh dầu ăn. Sau khi trộn đều để thịt bò ngấm gia vị, bạn tiến hành xào thịt bò đến gần chín thì tắt bếp. Bạn không cần cho thêm dầu ăn vì đã có sẵn dầu trong phần ướp thịt.'),
                      new Guide('Bước 4 ', 'Bạn chuẩn bị 1 cái thau inox để trộn gỏi bò. Tiếp đó, bạn cho phần khế, chuối và cà rốt (đã vớt ráo nước) vào thau, cho tiếp 2 muỗng canh nước sốt trộn gỏi. Bạn trộn đều rồi để riêng sang 1 bên. Kế tiếp, bạn cũng ướp phần thịt bò đã xào với 1 muỗng canh nước sốt và trộn đều. Bạn cho phần thịt bò vào thau inox để trộn cùng phần khế, chuối và cà rốt ban nãy. Cuối cùng, bạn cho những thành phần còn lại gồm thơm, hành tây và rau thơm cũng với 1 muỗng canh tỏi băm, 1 muỗng canh mè trắng và 1 muỗng canh đậu phộng rang. Bạn trộn đều hỗn hợp và cho ra dĩa.'),
                      new Guide('Bước 5 ', 'Với công đoạn làm nước chấm, bạn cho ra bát nhỏ 1 muỗng (canh) nước chanh, 2 muỗng nước mắm, 3 muỗng đường, 1 muỗng nước, ½ muỗng tỏi băm và ½ muỗng ớt băm. Cuối cùng trộn đều'),
                      new Guide('Bước 6 ', 'Vậy là món bò bóp thấu đã sẵn sàng để được đưa vào thực đơn giúp gia đình bạn thay đổi khẩu vị mùa hè này rồi đấy. Thưởng thức thịt bò tái mềm, kèm vị chua chua chát chát từ chuối và khế,'),
                    ];

const soupMaterial = [crab, chicken, egg, mushroom, carrot, onion, tapiocaPowder, water, salt,sugar, pepper];
const soupGuide = [new Guide('Bước 1 ', 'Cà rốt 1 củ bạn gọt sạch vỏ, rửa sạch, nấm ra rửa sạch, rồi dùng dao cắt nhỏ nấm. Ức gà mua về bạn ngâm với nước muối loãng trong 5 phút rồi rửa sạch lại với nước sạch, sau đó bắc 1 cái nồi lên bếp, cho vào nồi 500ml nước đun sôi rồi cho 300gr ức gà và luộc với lửa lớn. Cho 1 củ hành tây cắt đôi và 1/2 muỗng cà phê muối, 1/2 muỗng cà phê đường vào nồi nước luộc gà. Luộc khoảng 20 phút cho gà chín thì vớt ra xé nhuyễn thịt gà.'),
                new Guide('Bước 2 ', 'Bắc nồi lên bếp, cho vào nồi 500ml nước đun sôi rồi cho 20 quả trứng cút vào luộc với lửa vừa trong 10 phút cho trứng chín. Sau đó bạn vớt trứng ra để nguội rồi rồi bóc sạch vỏ. Tiếp đó bạn dùng dao cắt 5 quả trứng thành hình đẹp mắt để trang trí.'),
                new Guide('Bước 3 ', 'Cho 4 muỗng canh bột năng vào 1 cái tô, rồi cho 250ml nước lọc vào khuấy đều. Bạn đập 2 quả trứng gà vào 1 cái tô khác rồi đánh trứng nhé. Sau đó, bắc nồi lên bếp, cho 3.5 lít nước dùng vào nồi, rồi cho tiếp cà rốt đã cắt hạt lựu vào 2 muỗng canh đường và 1/2 muỗng cà phê muối. Tiếp đó, bạn cho 300gr măng tươi và 100gr nấm tuyết đã sơ chế vào nồi, tiếp tục cho các nguyên liệu còn lại gồm thịt gà và 400gr thịt cua vào nồi nấu với lửa lớn đến khi sôi thì vặn lửa vừa.'),
                new Guide('Bước 4 ', 'Để tạo độ sệt cho súp thì bạn cho tiếp tô nước bột năng vào nồi, sau đó cho hết 15 quả trứng cút đã bóc vỏ vào. Kế đó, bạn đổ hỗn hợp trứng đã pha qua 1 cái rây rồi cho vào nồi súp khuấy nhẹ tay theo 1 chiều thì trứng sẽ thành sợi đẹp mắt. Bạn nấu súp với lửa vừa khoảng 15 phút là hoành thành.'),
                new Guide('Bước 5 ', 'Món súp nóng hổi thơm lừng, bạn sẽ cảm nhận được vị ngọt dịu hoà quyện giữa thịt gà và thịt cua, nấm tuyết dai, măng tươi ngọt và giòn mềm điểm thêm vị béo của trứng cút, đảm bảo càng ăn càng thích mê.'),
];

const chickenMaterial = [chicken, mushroom, rice, onion, turmeric, ginger, sugar, salt, pepper]
const chickenGuide = [new Guide('Bước 1 ', 'Để sơ chế gà sạch và không hôi bạn dùng 1 muỗng canh giấm hòa tan với muối rồi thoa đều lên gà hoặc có thể ngâm trong muối và giấm pha loãng trong khoảng 3 - 5 phút. Sau đó rửa sạch lại với nước sạch nhiều lần rồi để ráo nước hoặc dùng khăm giấy thấm nước. Nấm hương khi mua về bạn dùng dao cắt đi phần gốc, chỉ giữ lại phần thân và phần lá. Cho nấm hương ngâm với nước muối loãng trong khoảng 5 phút rồi rửa sạch lại với nước rồi để ráo.'),
                new Guide('Bước 2 ', 'Cho vào tô lần lượt 1 muỗng cà phê hạt nêm, 1 muỗng cà phê bột hành, 1/2 muỗng cà phê tiêu, 1 muỗng cà phê dầu hào rồi trộn đều lên cho các nguyên liệu được hòa tan.'),
                new Guide('Bước 3 ', 'Thoa đều hỗn hợp nước sốt đã trộn trước đó lên gà, tiếp theo cho vào bụng gà 20gr nấm hương đã sơ chế và 10gr gừng đã cắt lát mỏng. Để yên gà trong khoảng 30 phút cho gà thấm gia vị. Bật lò nướng ở nhiệt độ 200 độ C trước khi nướng gà, sau đó cho phần gà đã thấm gia vị vào tầng giữa của lò. Tiến hành nướng gà trong khoảng 30 phút sau đó lấy gà ra và phết phần mỡ gà đã chảy xuống bên dưới lên trên gà.'),
                new Guide('Bước 4 ', 'Cho 800gr gạo nếp vào nồi rồi vo và rửa với nước sạch khoảng 2 lần. Sau đó cho vào nồi lượng nước ngập mặt gạo (khoảng 1/2 lóng tay) và 1/3 muỗng cà phê bột nghệ, 2/3 muỗng cà phê muối rồi tiến hành nấu gạo nếp.'),
                new Guide('Bước 5 ', 'Trải 2 miếng màng bọc thực phẩm thành hình dấu cộng, sau đó cho phần gạo nếp đã nấu chín lên trên và dàn đều gạo nếp ra. Tiếp theo, cho phần gà đã cắt khúc nhỏ và nấm hương lên trên gạo nếp rồi tiến hành bọc kín gà bằng gạo nếp. Bạn nên dùng tay để kéo và miết chặt phần màng bọc thực phẩm để phần gà bó xôi được định hình dễ dàng hơn.'),
                new Guide('Bước 6 ', 'Bắc chảo lên bếp, cho vào chảo 250ml dầu ăn và đợi dầu nóng, sau đó cho phần gà bó xôi vào và chiên ở lửa lớn. Chiên gà bó xôi cho đến khi phần xôi bên ngoài chuyển sang màu vàng sẫm và có độ giòn thì tắt bếp và cho ra đĩa. Dùng dao cắt nhỏ phần gà bó xôi và cho lên trên 1 ít mỡ hành rồi thưởng thức.'),
                new Guide('Bước 7 ', 'Gà bó xôi với lớp vỏ bên ngoài giòn và mang vị ngọt đặc trưng của nếp, phần bên trong với những miếng thịt gà mềm ngon và nấm hương ngọt thơm sẽ khiến bạn ngất ngây khi thưởng thức đấy.'),
];

const squidMaterial = [squid, carrot, onion, lemon, water, ginger, sugar, chilli, fishsauce, salt, pepper]
const squidGuide = [new Guide('Bước 1 ', 'Rửa với nước muối loãng khoảng 10 phút, sau đó rửa sạch lại với nước. Với loài mực trứng thì không cần bỏ nội tạng, vì như vậy sẽ làm mất luôn phần trứng và sữa bên trong làm giảm chất lượng dinh dưỡng của thực phẩm. Cà rốt rửa sạch, gọt vỏ rồi cắt sợi. Hành tây thái nhỏ. Gừng bạn đem chia làm hai phần bằng nhau, một phần cắt lát, phần còn lại đem đi cắt sợi nhỏ.'),
                new Guide('Bước 2 ', 'Cho mực vào một tô to cùng 1/2 muỗng cà phê muối, 1/2 muỗng cà phê tiêu. Trộn thật đều tay để gia vị thấm vào thịt mực rồi ướp khoảng 15 phút.'),
                new Guide('Bước 3 ', 'Bắc xửng hấp lên bếp, đổ 100ml nước vào nồi hấp. Xếp cà rốt, gừng, hành tây lên dĩa, sau đó xếp mực lên trên. Cuối cùng cho hành lá và hành tây cắt khúc lấp đầy bề mặt mực. Cho dĩa mực lên xửng hấp và tiến hành hấp 15 phút cho đến khi mực chín là hoàn tất.'),
                new Guide('Bước 4 ', 'Đầu tiên giã nhuyễn 1/2 phần gừng cắt lát và 2 trái ớt. Tiếp đến nêm thêm 2 muỗng canh đường, 3 muỗng canh nước mắm và 1 muỗng canh nước cốt chanh. Khuấy đều tay để hỗn hợp tan hết.'),
                new Guide('Bước 5 ', 'Món mực trứng hấp gừng vô cùng đơn giản phải không nào? Mực sau khi hấp vẫn giữ được độ giòn ngon, thịt ngọt chấm cùng với nước mắm gừng ăn kèm ít rau thơm thì còn gì bằng.'),
];

const shrimpMaterial = [shrimp, egg, friedDough, oil, sugar, chilli, fishsauce, salt, pepper]
const shrimpGuide = [new Guide('Bước 1 ', 'Tôm mua về bạn dùng dao cắt bỏ đầu, lột vỏ, lấy sạch chỉ đen trên lưng và giữ lại phần đuôi tôm. Sau đó, rửa tôm bằng nước muối pha loãng rồi rửa lại với nước sạch vài lần nữa và để ráo.'),
                new Guide('Bước 2 ', 'Đầu tiên, bạn cho 100gr bột chiên giòn vào chén, kế tiếp đập trứng gà vào rồi thêm 70ml nước lọc, dùng đũa khuấy đều. Sau đó nêm vào 1/2 muỗng cà phê bột ngọt, 1/2 muỗng cà phê hạt nêm, 1/2 muỗng cà phê tiêu xay, tiếp tục khuấy cho đến khi hỗn hợp bột mịn không quá đặc không quá lỏng là đạt.'),
                new Guide('Bước 3 ', 'Bạn nhúng tôm đã sơ chế qua hỗn hợp bột chiên giòn vừa pha, sau đó lăn qua lớp bột chiên xù rồi cho tôm ra dĩa. Thực hiện các thao tác tương tự như vậy cho đến khi hết tôm.'),
                new Guide('Bước 4 ', 'Bắc chảo lên bếp, cho vào 400ml dầu ăn đun sôi, đến khi dầu sôi thì bạn cho tôm vào chiên ở lửa vừa. Khoảng 2 - 3 phút, khi tôm bắt đầu săn cứng lại thì trở tôm đều cho tôm vàng đều cả 2 mặt rồi vớt ra dĩa có lót giấy thấm dầu.'),
                new Guide('Bước 5 ', 'Tôm chiên xù hoàn thành với hình thức đẹp mắt, khiến ai mới nhìn vào cũng không thể nào nỡ chối từ được. Khi ăn vào bạn sẽ cảm nhận được lớp bột chiên giòn tan hòa quyện cùng tôm ngọt tươi, thấm đẫm gia vị. Để món ăn đậm vị hơn bạn có thể chấm cùng tương ớt nhé!'),
];

const bananaMaterial = [banana, egg, butter, tapiocaPowder, coconutMilk, milk, wine, vani , oil, sugar, salt]
const bananaGuide = [new Guide('Bước 1 ', 'Chuối lột vỏ, cắt lát mỏng đổ vào tô trộn đều cùng rượu rum và đường. Đợi nước đường tan hết, bạn đem chuối cho vào tủ lạnh, để qua đêm. Trộn đều các nguyên liệu gồm sữa tươi + nước cốt dừa + bơ + muối + vani. Xé nhỏ các ổ bánh mì cho vào tô trộn đều cùng hỗn hợp sữa tươi, nước dừa, rồi để yên hỗn hợp khoảng 2 tiếng cho bánh mì nở to, đều. Sau 2 tiếng, bạn đập 1 trái trứng gà vào tô hỗn hợp nước cốt dừa, trộn đều. Tiếp theo, trộn 2/3 chuối cắt lát vào và phần chuối còn lại dùng để trang trí nhé.'),
                new Guide('Bước 2 ', 'Lót giấy nến vào khuôn bánh, phết một lớp bơ quanh viền khuôn, đổ hỗn hợp bánh chuối vào, trên mặt xếp các miếng chuối còn lại lên. Làm nóng lò trong vòng 10 phút ở nhiệt độ 170 – 230 độ C, cho khuôn bánh vào lò nướng khoảng 70 phút. Nướng xong, đợi bánh nguội hoàn toàn rồi lấy ra khỏi lò.'),
                new Guide('Bước 3 ', 'Sau khi lấy bánh ra, bạn đem ướp lạnh bánh trong tủ lạnh qua đêm ăn sẽ ngon hơn. Cắt bánh tành miếng vừa ăn. Trang trí cho đẹp mắt và thưởng thức nhé!'),
];

const fruitMaterial = [apple, watermelon, mango, longan, orange];

const cocktailMaterial = [pineapple, kiwi, orange, grape, watermelon, apple, ice]
const cocktailGuide = [new Guide('Bước 1 ', 'Cam bạn lấy 1 nửa vắt lấy nước cốt còn 1 nửa cắt thành lát mỏng, chanh cắt thành lát mỏng. Dứa gọt vỏ, bỏ mắt, cắt lát mỏng, kiwi gọt vỏ, cắt lát mỏng, dưa hấu gọt vỏ, bỏ hạt và cắt thành lát mỏng'),
                new Guide('Bước 2 ', 'Bạn cho một lớp đá viên loại nhỏ dưới đáy bình, sau đó rải lần lượt từng lớp trái cây theo từng loại để phủ đầy rồi đổ thêm một lớp đá lên trên cùng cho đầy nữa. Cuối cùng bạn chỉ cần đổ lần lượt bia táo, nước ngọt có ga và nước trái cây vào là được. Nếu có, bạn cho thêm một chút rượu vang nữa sẽ ngon hơn nhé.'),
                new Guide('Bước 3 ', 'Khi uống cocktail trái cây, bạn chỉ cần khuấy đều, rót ra ly là có thể thưởng thức được rồi.'),
];

const pennywortMaterial = [pennywort, water, sugar, ice]
const pennywortGuide = [new Guide('Bước 1 ', 'Bạn hãy ngắt bỏ bớt thân cứng của rau má sau đó rửa sạch thật kĩ và để vào rổ cho ráo nước.'),
                new Guide('Bước 2 ', 'Bây giờ bạn cho rau má vào máy sinh tố rồi xay cho rau má thật mịn (thêm một ít nước lọc để khi xay được dễ dàng hơn nhé)'),
                new Guide('Bước 3 ', 'Sau khi xay xong bạn dùng rây lọc bã rau má để lấy nước cốt rồi tiếp tục xay cho hết phần rau má.'),
                new Guide('Bước 4 ', 'Rót ra cốc và và thêm một ít đường cho dễ uống. Như vậy là bạn đã hoàn thành cốc nước ép rau má ngon tuyệt và đầy hấp dẫn. Bạn có thể thưởng thức ngay hoặc thêm một ít đá lạnh để tăng kích thích vị giác nhé.'),
];
 
// Recipes
// id, title, url, time, calories, type, material, guide
const r1 = new Recipe(0, 'Bánh Sandwich Nướng Bơ', 'https://image.cooky.vn/recipe/g4/33949/s640/cooky-recipe-cover-r33949.jpg', '20 phút', '100 Kcal', breakfast, breadMaterial, breadGuide);
const r2 = new Recipe(1, 'Mỳ Quảng Gà', 'https://cdn.tgdd.vn/Files/2019/08/07/1185290/cach-nau-mi-quang-ga-ngon-dam-da-dung-vi-mien-trung-202106211351007621.jpg', '1 giờ', '250 Kcal', breakfast, noodlesMaterial, noodlesGuide);
const r3 = new Recipe(2, 'Bò Bóp Thấu Thịt Mềm', 'https://cdn.tgdd.vn/Files/2021/07/31/1372094/cach-lam-bo-bop-thau-thit-mem-ngon-chuan-vi-202107311710292626.jpg', '1 giờ', '150 Kcal', appetizer, beefMaterial, beefGuide);
const r4 = new Recipe(3, 'Súp Cua Nấm Tuyết', 'https://cdn.tgdd.vn/2021/11/CookDish/2-cach-nau-sup-cua-nam-thom-ngon-hap-dan-de-lam-ngay-tai-nha-avt-1200x676.jpg', '42 phút', '120 Kcal', appetizer, soupMaterial, soupGuide);
const r5 = new Recipe(4, 'Gà Bó Xôi', 'https://cdn.tgdd.vn/2021/02/CookRecipe/GalleryStep/thanh-pham-161.jpg', '120 phút', '320 Kcal', mainDishes, chickenMaterial, chickenGuide);
const r6 = new Recipe(5, 'Mực Hấp Gừng', 'https://cdn.tgdd.vn/2021/03/CookRecipe/GalleryStep/thanh-pham-1183.jpg', '30 phút', '320 Kcal', mainDishes, squidMaterial, squidGuide);
const r7 = new Recipe(6, 'Bánh Sandwich Nướng Bơ', 'https://image.cooky.vn/recipe/g4/33949/s640/cooky-recipe-cover-r33949.jpg', '20 phút', '100 Kcal', sideDishes, breadMaterial, breadGuide);
const r8 = new Recipe(7, 'Tôm chiên Xù', 'https://cdn.tgdd.vn/2021/07/CookRecipe/Avatar/tom-chien-xu-nguyen-vo-thumbnail.jpg', '60 phút', '170 Kcal', sideDishes, shrimpMaterial, shrimpGuide);
const r9 = new Recipe(8, 'Bánh Chuối Nướng Nước Cốt Dừa', 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/banh-chuoi-nuong-nuoc-cot-dua-thumbnail.jpg', '120 phút', '200 Kcal', dessert, bananaMaterial, bananaGuide);
const r10 = new Recipe(9, 'Trái Cây Nhiệt Đới', 'https://pastaxi-manager.onepas.vn/content/uploads/articles/mon-an-vat-hai/35-trang-tri-hoa-qua/qua-1.jpg', '20 phút', '200 Kcal', dessert, fruitMaterial, null);
const r11 = new Recipe(10, 'Cocktail Trái Cây', 'https://smoothiedays.com/wp-content/uploads/2020/12/lam-cocktail.png', '60 phút', '60 Kcal', drink, cocktailMaterial, cocktailGuide);
const r12 = new Recipe(11, 'Nước Rau Má', 'https://hc.com.vn/i/ecommerce/media/ckeditor_3230472.jpg', '20 phút', '60 Kcal', drink, pennywortMaterial, pennywortGuide);

const listRecipe = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12];
const listType = [breakfast, appetizer, mainDishes, sideDishes, dessert, drink];

module.exports = { listRecipe, listType };