/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description 不对称加密算法对象
 * 
 *  PKey 对象属于 crypto 模块，创建：
 *  ```JavaScript
 *  var k = new crypto.PKey();
 *  ```
 *  
 */
declare class Class_PKey extends Class_object {
    /**
     * @description PKey 构造函数 
     */
    constructor();

    /**
     * @description 通过 DER 格式的密钥构造 PKey
     *      @param DerKey DER 格式的密钥
     *      @param password 解密密码
     *     
     */
    constructor(DerKey: Class_Buffer, password?: string);

    /**
     * @description 通过 PEM 格式的密钥构造 PKey
     *      @param pemKey PEM 格式的密钥
     *      @param password 解密密码
     *     
     */
    constructor(pemKey: string, password?: string);

    /**
     * @description 通过 JSON 格式的密钥构造 PKey
     * 
     *      jsonKey 的格式支持以下四种，RSA 私钥：
     *      ```JavaScript
     *      {
     *         "kty": "RSA",
     *         "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *         "e": "AQAB",
     *         "d": "agN2O9NxMHL1MTMi75WfL9Pxvl-KWXKqZSF6mjzAsF9iKI8euyHIXYFepzU8kual1RsjDhCnzvWqFvZplW8lXqrHf_P-rS_9Y4gBUw6pjnI_DnFIRwWHRvrUHHSCfWOdTCIKdOTkgLZuGFuhEY3RMIW0WSYejjLtftwy0RVxAzk=",
     *         "p": "6a4G1qmfwWmn1biigN7IVFlkbLf9oVe6g7rOmHxI-hn1GRxKDSVuAUrmR1IhuAnca9M0y7SD-7TUs6wjOxWxaw==",
     *         "q": "5ofkxFKdPBD0CQHMb9q13AMHUVe0rJ-hSjqqIBrmqApUOneyAcMV76M0QyIQnI2p3POa4Qu_7XChDwRVl7LlDQ==",
     *         "dp": "2mXGiGwCHl8j-FBWuID-1C6z-BRB3MBEVoeKPOOzxOPruatB3mWEGXsqG7A8SWgV9URxTI2K6P3J6Z7RUpBkvw==",
     *         "dq": "oagn5vfb5NQqnOpS9xkSsD67cfIj821ZSFlNFYhnuOzNVda7z_qCtnHm4zDPH0lEFXoKYMfBhfqWJpaugttjPQ==",
     *         "qi": "dqEQgxNmOVFrF4s776hTqeC6oEDila8EvpVb2F2ZvwAOLjCQ66OiAZK1BiYGHqUy0NeqNmtlsLSuBEZQZvqZwg=="
     *      }
     *      ```
     *      RSA 公钥：
     *      ```JavaScript
     *      {
     *         "kty": "RSA",
     *         "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *         "e": "AQAB"
     *      }
     *      ```
     *      EC 私钥：
     *      ```JavaScript
     *      {
     *         "kty": "EC",
     *         "crv": "P-521",
     *         "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *         "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
     *         "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
     *      }
     *      ```
     *      EC 公钥：
     *      ```JavaScript
     *      {
     *         "kty": "EC",
     *         "crv": "P-521",
     *         "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *         "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
     *      }
     *      ```
     *      @param jsonKey JSON 格式的密钥
     *     
     */
    constructor(jsonKey: FIBJS.GeneralObject);

    /**
     * @description 返回当前算法名称 
     */
    readonly name: string;

    /**
     * @description 返回当前算法密码长度，以位为单位 
     */
    readonly keySize: number;

    /**
     * @description 返回当前密钥的公钥
     *      @return 当前密钥的公钥
     *     
     */
    readonly publicKey: Class_PKey;

    /**
     * @description 生成一个 RSA 私钥
     *      @param size 指定 RSA 密钥长度，bit 为单位
     *     
     */
    genRsaKey(size: number): void;

    genRsaKey(size: number, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 生成一个 EC 私钥
     *      @param curve 指定预置椭圆曲线，可选值为："secp521r1", "brainpoolP512r1", "secp384r1", "brainpoolP384r1", "secp256r1", "secp256k1", "brainpoolP256r1", "secp224r1", "secp224k1", "secp192r1", "secp192k1"
     *     
     */
    genEcKey(curve?: string): void;

    genEcKey(curve?: string, callback?: (err: Error | undefined | null)=>any): void;

    /**
     * @description 生成一个 SM2 私钥
     *     
     */
    genSm2Key(): void;

    genSm2Key(callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 查询当前密钥是否为私钥
     *      @return 为 True 表示为私钥
     *     
     */
    isPrivate(): boolean;

    /**
     * @description 复制当前密钥
     *      @return 当前密钥的复制对象
     *     
     */
    clone(): Class_PKey;

    /**
     * @description 加载一个 DER 格式的密钥
     *      @param DerKey DER 格式的密钥
     *      @param password 解密密码
     *     
     */
    importKey(DerKey: Class_Buffer, password?: string): void;

    /**
     * @description 加载一个 PEM 格式的密钥
     *      @param pemKey PEM 格式的密钥
     *      @param password 解密密码
     *     
     */
    importKey(pemKey: string, password?: string): void;

    /**
     * @description 加载一个 JSON 格式的密钥
     * 
     *      jsonKey 的格式支持以下四种，RSA 私钥：
     *      ```JavaScript
     *      {
     *         "kty": "RSA",
     *         "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *         "e": "AQAB",
     *         "d": "agN2O9NxMHL1MTMi75WfL9Pxvl-KWXKqZSF6mjzAsF9iKI8euyHIXYFepzU8kual1RsjDhCnzvWqFvZplW8lXqrHf_P-rS_9Y4gBUw6pjnI_DnFIRwWHRvrUHHSCfWOdTCIKdOTkgLZuGFuhEY3RMIW0WSYejjLtftwy0RVxAzk=",
     *         "p": "6a4G1qmfwWmn1biigN7IVFlkbLf9oVe6g7rOmHxI-hn1GRxKDSVuAUrmR1IhuAnca9M0y7SD-7TUs6wjOxWxaw==",
     *         "q": "5ofkxFKdPBD0CQHMb9q13AMHUVe0rJ-hSjqqIBrmqApUOneyAcMV76M0QyIQnI2p3POa4Qu_7XChDwRVl7LlDQ==",
     *         "dp": "2mXGiGwCHl8j-FBWuID-1C6z-BRB3MBEVoeKPOOzxOPruatB3mWEGXsqG7A8SWgV9URxTI2K6P3J6Z7RUpBkvw==",
     *         "dq": "oagn5vfb5NQqnOpS9xkSsD67cfIj821ZSFlNFYhnuOzNVda7z_qCtnHm4zDPH0lEFXoKYMfBhfqWJpaugttjPQ==",
     *         "qi": "dqEQgxNmOVFrF4s776hTqeC6oEDila8EvpVb2F2ZvwAOLjCQ66OiAZK1BiYGHqUy0NeqNmtlsLSuBEZQZvqZwg=="
     *      }
     *      ```
     *      RSA 公钥：
     *      ```JavaScript
     *      {
     *         "kty": "RSA",
     *         "n": "0m5lvKpWqy9JS7tV2HIPqHCYHLquSuxIC3F8strIQLJKO3rZmTT96KTnhsOfBO7Y1bI7mnT0PB3_vcHd9ekWMEoZJQw7MuB8KeM_Wn54-elJr5DNLk5bMppSGxX7ZnumiXGG51_X3Yp-_EbGtDG80GxXXix7Mucyo7K25uE0uW8=",
     *         "e": "AQAB"
     *      }
     *      ```
     *      EC 私钥：
     *      ```JavaScript
     *      {
     *         "kty": "EC",
     *         "crv": "P-521",
     *         "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *         "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
     *         "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
     *      }
     *      ```
     *      EC 公钥：
     *      ```JavaScript
     *      {
     *         "kty": "EC",
     *         "crv": "P-521",
     *         "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
     *         "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
     *      }
     *      ```
     *      @param jsonKey JSON 格式的密钥
     *     
     */
    importKey(jsonKey: FIBJS.GeneralObject): void;

    /**
     * @description 加载一个 PEM/DER 格式的密钥文件
     *      @param filename 密钥文件名
     *      @param password 解密密码
     *     
     */
    importFile(filename: string, password?: string): void;

    /**
     * @description 返回当前 key 的 PEM 格式编码
     *      @return 当前 key 的 PEM 格式编码
     *     
     */
    exportPem(): string;

    /**
     * @description 返回当前 key 的 DER 格式编码
     *      @return 当前 key 的 DER 格式编码
     *     
     */
    exportDer(): Class_Buffer;

    /**
     * @description 返回当前 key 的 DER 格式编码
     *      @return 当前 key 的 DER 格式编码
     *     
     */
    exportJson(): FIBJS.GeneralObject;

    /**
     * @description 使用当前算法密码公钥加密数据
     *      @param data 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    encrypt(data: Class_Buffer): Class_Buffer;

    encrypt(data: Class_Buffer, callback: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用当前算法密码私钥解密数据
     *      @param data 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    decrypt(data: Class_Buffer): Class_Buffer;

    decrypt(data: Class_Buffer, callback: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用当前算法密码私钥签名数据
     *      @param data 指定要签名的数据
     *      @param alg 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160
     *      @return 返回签名后的数据
     *      
     */
    sign(data: Class_Buffer, alg?: number): Class_Buffer;

    sign(data: Class_Buffer, alg?: number, callback?: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用当前算法密码公钥验证数据
     *      @param data 指定要验证的数据
     *      @param sign 指定要验证的签名
     *      @param alg 指定要签名的算法, 默认0. 支持算法: 0=NONE,1=MD2,2=MD4,3=MD5,4=SHA1,5=SHA224,6=SHA256,7=SHA384,8=SHA512,9=RIPEMD160
     *      @return 返回验证后的结果
     *      
     */
    verify(data: Class_Buffer, sign: Class_Buffer, alg?: number): boolean;

    verify(data: Class_Buffer, sign: Class_Buffer, alg?: number, callback?: (err: Error | undefined | null, retVal: boolean)=>any): void;

}

