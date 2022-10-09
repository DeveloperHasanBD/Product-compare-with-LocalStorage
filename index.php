<!-- Step one  -->
$product_id = get_the_ID();
?>
<input id="compare_pro_<?php echo $product_id; ?>" class="product_compare_now" type="checkbox" product_id=<?php echo $product_id; ?> product_name=<?php the_title() ?>>
<label for="compare_pro_<?php echo $product_id; ?>">Compare</label>
<?php



// display compare buttom step two 
<div class="product_compare_box">
    <div class="product_compare_box_inner">
        <div class="box">
            <table id="set_products">

            </table>
        </div>
        <div class="box">
            <a class="set_pro_ids" site_url="<?php echo site_url(); ?>" href="">Compare now</a>
        </div>
    </div>
</div>
  
  
// css design 
  
  
  
.product_compare_box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: green;
    z-index: 9;
    text-align: center;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0px 100px;
}

.product_compare_box a {
    font-size: 30px;
    color: #fff;
}

.product_compare_box {
    display: none;
}

table#set_products {
    display: flex;
}

.product_compare_box_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
}

table#set_products tr {
    padding: 0px 30px;
}

table#set_products tr td p {
    font-size: 16px;
    color: red;
    border: 1px solid red;
    display: block;
    text-align: center;
    margin-left: 10px;
    padding: 5px;
    height: 30px;
    line-height: 17px;
}

table#set_products tr td {
    color: #fff;
}

nav.woocommerce-pagination{
    margin-bottom: 150px;
}
  
