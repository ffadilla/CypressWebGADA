import CoreRequestListPage from "../../../warehouse_core/page_objects/inbound/RequestListPage";
export default class RequestListPage extends CoreRequestListPage {}

const searchbox =
  'input[placeholder="No. permintaan barang atau nama produk..."]';

export function getSearchbox() {
  return searchbox;
}
