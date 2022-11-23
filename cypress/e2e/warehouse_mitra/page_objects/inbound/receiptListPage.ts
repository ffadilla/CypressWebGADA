import CoreReceiptListPage from "../../../warehouse_core/page_objects/inbound/receiptListPage";

export default class ReceiptListPage extends CoreReceiptListPage {}

const searchbox =
  'input[placeholder="No. permintaan barang atau nama produk..."]';

export function getSearchbox() {
  return searchbox;
}
