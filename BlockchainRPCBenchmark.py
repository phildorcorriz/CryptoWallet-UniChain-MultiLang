import time
import requests

class RPCBenchmark {
    def test_speed(self, rpc_url):
        start = time.time()
        requests.get(rpc_url)
        return time.time() - start

bench = RPCBenchmark()
print("=== RPC性能测试器 ===")
print(bench.test_speed("https://rpc.ankr.com/eth"))
