$(function () {
    $.connection.hub.url = "http://localhost:9000/signalr";
    var reader = $.connection.nfcHub;

    reader.client.register = function (card) {
        console.log('who is:', card)
        reader.server.register(card, prompt('Who is this?', ''))
    };
    var template = $("#session-template").html();
    var ctemplate = $("#complete-session-template").html();

    function updateList(txs) {
        _.each(txs, function (element, index) {
            _.extend(element.Value, {
                Start: moment(element.Value.Transaction.Started, moment.ISO_8601).fromNow(),
                End: moment(element.Value.Transaction.Ended, moment.ISO_8601).fromNow(),
                Duration: moment.duration(element.Value.Transaction.Duration).humanize()
            });
        });
    } 

    reader.client.update = function (txs) {
        updateList(txs.new_sessions)
        updateList(txs.ready_to_submit)
        updateList(txs.complete)
        console.log(txs)
        $('.total-hours-count').html(moment.duration(txs.total_minutes, 'minute').humanize())
        $('.total-session-count').html(txs.total_sessions)
        $('.total-question-count').html(txs.total_questions)
        $('#missing-message').html(Mustache.to_html(template, { items: txs.new_sessions }))
        $('#missing-ticket').html(Mustache.to_html(template, { items: txs.ready_to_submit }))
        $('#complete').html(Mustache.to_html(ctemplate, { items: txs.complete }))
    };
    reader.client.log = function (data) {
        console.log(data)
    };

    $.connection.hub.start().done(function () {
        $('body').on('click', '.session-description button', function () {
            var message = $(this).parents('.box').find('[name=message]');
            var ticket = $(this).parents('.box').find('[name=ticket]');
            var id = $(this).parents('.box').data('id');
            reader.server.commentOn(id, message.val(), ticket.val(),0);
        })

        $('body').on('click', '.session-description button.submit-entry', function () {
            var id = $(this).parents('.box').data('id');
            reader.server.submitTimeEntry(id);
        })

        $('body').on('click', '.box button.remove-session', function () {
            var id = $(this).parents('.box').data('id');
            reader.server.remove(id);
        })
    });
});