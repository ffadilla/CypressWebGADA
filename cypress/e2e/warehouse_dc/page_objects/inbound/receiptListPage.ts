import CoreReceiptListPage from "../../../warehouse_core/page_objects/inbound/receiptListPage";

export default class ReceiptListPage extends CoreReceiptListPage {}

const searchbox =
  'input[placeholder="No. Barang Masuk atau No. Permintaan Barang"]';

export function getSearchbox() {
  return searchbox;
}
