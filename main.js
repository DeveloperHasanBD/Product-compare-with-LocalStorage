(function ($) {
    $(document).ready(function () {

        $("body").delegate(".product_compare_now", "click", function (e) {
            if ($(this).prop('checked') == true) {

                let get_data = JSON.parse(localStorage.getItem('crud'));

                var total_ids_count;
                if (get_data) {
                    total_ids_count = get_data.length + 1;
                } else {
                    total_ids_count = 1
                }

                if (total_ids_count > 3) {
                    $(this).prop('checked', false);
                    alert("Max 3");
                } else {
                    var product_id = $(this).attr('product_id');
                    var product_name = $(this).attr('product_name');
                    var arr = JSON.parse(localStorage.getItem('crud'));
                    if (arr == null) {
                        let data = [{
                            'product_id': product_id,
                            'product_name': product_name,
                        }];
                        localStorage.setItem('crud', JSON.stringify(data));
                        display_product();
                    } else {
                        arr.push(
                            {
                                'product_id': product_id,
                                'product_name': product_name,
                            }
                        );
                        localStorage.setItem('crud', JSON.stringify(arr));
                        display_product();
                    }
                }
            } else {
                var product_id = $(this).attr('product_id');
                let get_data = JSON.parse(localStorage.getItem('crud'));

                const index = get_data.findIndex(object => {
                    return object.product_id === product_id;
                });

                get_data.splice(index, 1);
                localStorage.setItem('crud', JSON.stringify(get_data));
                display_product();
            }
        })



        input_checked_field();
        function input_checked_field() {
            let get_data = JSON.parse(localStorage.getItem('crud'));
            if (get_data) {
                var total_ids = get_data.length;
                if (total_ids > 0) {
                    for (let i = 0; i < total_ids; i++) {
                        $("#compare_pro_" + get_data[i].product_id).prop("checked", true);
                    }
                }
            }
        }

        display_product();
        function display_product() {
            var gete_compare_data = JSON.parse(localStorage.getItem('crud'));
            if (gete_compare_data) {
                var total_products = gete_compare_data.length;
                if (total_products > 0) {
                    var html = '';
                    var get_all_pro_ids = [];
                    for (i = 0; i < total_products; i++) {
                        get_all_pro_ids.push(gete_compare_data[i].product_id);
                        html += `
                            <tr>
                                <td>${gete_compare_data[i].product_name}</td>
                                <td><p class="delete_pro" arr_indx="${i}" product_id="${gete_compare_data[i].product_id}">X</p></td>
                            </tr>
                        `;
                    }
                    $("#set_products").html(html);
                    var join_all_pro_ids = get_all_pro_ids.join(".");
                    var site_url = $(".set_pro_ids").attr('site_url');
                    $(".set_pro_ids").attr('href', site_url + '/pro-compare/?ids=' + join_all_pro_ids);
                    $(".product_compare_box").css({ 'display': 'block' });
                } else {
                    $(".product_compare_box").css({ 'display': 'none' });
                }
            }
        }

        $("body").delegate(".delete_pro", "click", function (e) {
            var arr_indx = $(this).attr('arr_indx');
            var product_id = $(this).attr('product_id');

            $("#compare_pro_" + product_id).prop("checked", false);

            let get_data = JSON.parse(localStorage.getItem('crud'));
            get_data.splice(arr_indx, 1);
            localStorage.setItem('crud', JSON.stringify(get_data));
            display_product();
        });


    });
})(jQuery)


