$(function () {
    // 文字色が任意の色に更新される
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // 任意の文字内容に更新される
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });

    // フェードアウトで文字が消える
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードインで文字が現れる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});