   // ctx.beginPath();
                // ctx.moveTo(75, 50);
                // ctx.lineTo(100, 75);
                // ctx.lineTo(125, 50);
                // ctx.lineTo(100, 25);
                // ctx.fill();

                // ctx.beginPath();
                // ctx.moveTo(25, 25);
                // ctx.lineTo(105, 25);
                // ctx.lineTo(25, 105);
                // ctx.fill();

                // ctx.beginPath();
                // ctx.moveTo(125, 125);
                // ctx.lineTo(125, 45);
                // ctx.lineTo(45, 125);
                // ctx.closePath();
                // ctx.stroke();


                // ctx.beginPath();
                // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
                // ctx.moveTo(110, 75);
                // ctx.lineTo(40, 75);
                // // ctx.fill();
                // ctx.arc(75, 75, 35, 0, Math.PI, false);  // 口 (時計回り)
                // ctx.moveTo(65, 65);
                // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左目
                // ctx.moveTo(95, 65);
                // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右目
                // ctx.stroke();

                
                // for (var i = 0; i < 4; i++) {
                //     for (var j = 0; j < 3; j++) {
                //         ctx.beginPath();
                //         var x = 25 + j * 50; // x 座標
                //         var y = 25 + i * 50; // y 座標
                //         var radius = 20; // 円弧の半径
                //         var startAngle = 0; // 円孤の始点
                //         var endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
                //         var counterclockwise = i % 2 !== 0; // 時計回りまたは反時計回り

                //         ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                //         if (i > 1) {
                //         ctx.fill();
                //         } else {
                //         ctx.stroke();
                //         }
                //     }
                // }

                // 二次曲線の例
                // ctx.beginPath();
                // ctx.moveTo(75, 25);
                // ctx.quadraticCurveTo(25, 25, 25, 62.5);
                // ctx.quadraticCurveTo(25, 100, 50, 100);
                // ctx.quadraticCurveTo(50, 120, 30, 125);
                // ctx.quadraticCurveTo(60, 120, 65, 100);
                // ctx.quadraticCurveTo(125, 100, 125, 62.5);
                // ctx.quadraticCurveTo(125, 25, 75, 25);
                // ctx.stroke();


                // 三次ベジェ曲線の例
                // ctx.beginPath();
                // ctx.moveTo(75, 40);
                // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                // ctx.bezierCurveTo(15, 25, 20, 62.5, 20, 62.5);
                // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                // ctx.bezierCurveTo(130, 52.5, 130, 25, 100, 25);
                // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                // ctx.fill();

                // roundedRect(ctx, 12, 12, 150, 150, 15);
                // roundedRect(ctx, 19, 19, 150, 150, 9);
                // roundedRect(ctx, 53, 53, 49, 33, 10);
                // roundedRect(ctx, 53, 119, 49, 16, 6);
                // roundedRect(ctx, 135, 53, 49, 33, 10);
                // roundedRect(ctx, 135, 119, 25, 49, 10);

                // ctx.beginPath();
                // ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
                // ctx.lineTo(31, 37);
                // ctx.fill();

                // for (var i = 0; i < 8; i++) {
                // ctx.fillRect(51 + i * 16, 35, 4, 4);
                // }

                // for (i = 0; i < 6; i++) {
                // ctx.fillRect(115, 51 + i * 16, 4, 4);
                // }

                // for (i = 0; i < 8; i++) {
                // ctx.fillRect(51 + i * 16, 99, 4, 4);
                // }

                // ctx.beginPath();
                // ctx.moveTo(83, 116);
                // ctx.lineTo(83, 102);
                // ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
                // ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
                // ctx.lineTo(111, 116);
                // ctx.lineTo(106.333, 111.333);
                // ctx.lineTo(101.666, 116);
                // ctx.lineTo(97, 111.333);
                // ctx.lineTo(92.333, 116);
                // ctx.lineTo(87.666, 111.333);
                // ctx.lineTo(83, 116);
                // ctx.fill();

                // ctx.fillStyle = 'white';
                // ctx.beginPath();
                // ctx.moveTo(91, 96);
                // ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
                // ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
                // ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
                // ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
                // ctx.moveTo(103, 96);
                // ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
                // ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
                // ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
                // ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
                // ctx.fill();

                // ctx.fillStyle = 'black';
                // ctx.beginPath();
                // ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
                // ctx.fill();

                // ctx.beginPath();
                // ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
                // ctx.fill();
            
        

                // // 角丸の四角形を描画するためのユーティリティ関数

                // function roundedRect(ctx, x, y, width, height, radius) {
                // ctx.beginPath();
                // ctx.moveTo(x, y + radius);
                // ctx.arcTo(x, y + height, x + radius, y + height, radius);
                // ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
                // ctx.arcTo(x + width, y, x + width - radius, y, radius);
                // ctx.arcTo(x, y, x, y + radius, radius);
                // ctx.stroke();
                // }


                // new Path2D();     // 空のパスオブジェクトを作成する
                // new Path2D(path); // 別の Path2D オブジェクトを複製する
                // new Path2D(d);    // SVG パスデータからパスを作成する


                
                // var rectangle = new Path2D();
                // rectangle.rect(10, 10, 50, 50);

                // var circle = new Path2D();
                // circle.arc(100, 35, 25, 0, 2 * Math.PI);

                // ctx.stroke(rectangle);
                // ctx.fill(circle);

                ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // 円形のクリッピングパスを作成
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // 背景を描く
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // 星を描く
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
                  75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }

}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

