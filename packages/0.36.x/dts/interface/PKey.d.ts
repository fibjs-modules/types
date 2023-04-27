/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description PKey 是内置的 crypto 模块提供的对象，它表示一对密钥：公钥和私钥。PKey 支持在 JS 中生成密钥、载入密钥、存储密钥以及对加密过程进行管理
 * 
 * PKey 对象支持多种加密算法，如 RSA、EC 或 Ed25519 等，每种加密算法都有其独特的密钥生成和管理方式。PKey 对象还包含了该密钥所属的算法名称以及密钥长度等属性。
 * 
 * 以下是 PKey 的常用方法及其举例说明：
 * 
 * 1. generateKey(alg | bits)：生成一对密钥，alg 指定密钥算法，bits 指定密钥长度，缺省为 2048。
 * 
 * ```JavaScript
 * var crypto = require('crypto');
 * 
 * var pkey = crypto.generateKey(2048);
 * ```
 * 
 * 2. from(value[, password])：将 DER 或 PEM 格式的密钥加载到 PKey 对象中。
 * 
 * ```JavaScript
 * var crypto = require('crypto');
 * 
 * var pkey = crypto.PKey.from(fs.readFile('rsa.private.pem'));
 * ```
 * 
 * 3. publicKey：获取当前密钥的公钥。
 * 
 * ```JavaScript
 * var crypto = require('crypto');
 * 
 * var pkey = crypto.PKey.from(fs.readFile('rsa.private.pem'));
 * var pubkey = pkey.publicKey;
 * ```
 * 
 * 4. equals(other)：判断两个公、私钥是否相等。
 * 
 * ```JavaScript
 * var crypto = require('crypto');
 * 
 * var pkey1 = crypto.PKey.from(fs.readFile('rsa.private.pem'));
 * var pkey2 = crypto.PKey.from(fs.readFile('rsa.public.pem'));
 * console.log(pkey1.equals(pkey2)); // output: true
 * ```
 *  
 */
declare class Class_PKey extends Class_object {
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
     * @description 返回和设置当前对象签名算法 
     */
    alg: string;

    /**
     * @description 返回当前密钥的公钥
     *      @return 当前密钥的公钥
     *     
     */
    readonly publicKey: Class_PKey;

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
     *      @return 返回包含密钥的对象
     *     
     */
    static from(DerKey: Class_Buffer, password?: string): Class_PKey;

    /**
     * @description 加载一个 PEM 格式的密钥
     *      @param pemKey PEM 格式的密钥
     *      @param password 解密密码
     *      @return 返回包含密钥的对象
     *     
     */
    static from(pemKey: string, password?: string): Class_PKey;

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
     *      @return 返回包含密钥的对象
     *     
     */
    static from(jsonKey: FIBJS.GeneralObject): Class_PKey;

    /**
     * @description 返回当前 key 的 PEM 格式编码
     *      @return 当前 key 的 PEM 格式编码
     *     
     */
    pem(): string;

    /**
     * @description 返回当前 key 的 DER 格式编码
     *      @return 当前 key 的 DER 格式编码
     *     
     */
    der(): Class_Buffer;

    /**
     * @description 返回当前 key 的 jwt 格式编码
     *      opts 支持以下参数:
     *      ```JavaScript
     *      {
     *        compress: false， 指定签名以压缩方式输出公钥
     *      }
     *      ```
     *      支持压缩的曲线为：secp192r1, secp192k1, secp256r1, secp256k1, brainpoolP256r1,
     *                     secp384r1, brainpoolP384r1, brainpoolP512r1, secp521r1, sm2
     * 
     *      @param opts 指定导出选项
     *      @return 当前 key 的 jwt 格式编码
     *     
     */
    json(opts?: FIBJS.GeneralObject): FIBJS.GeneralObject;

    /**
     * @description 比较两个公/私钥是否相同
     *      @param key 指定对方的公/私钥
     *      @return 相同则返回 true
     *      
     */
    equals(key: Class_PKey): boolean;

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
     *      opts 支持以下参数:
     *      ```JavaScript
     *      {
     *         alg: 0， 指定签名的 hash 算法，仅在 RSA 时有效，缺省为 0. 支持算法: 0=NONE,1=MD5,2=SHA1,3=SHA224,4=SHA256,5=SHA384,6=SHA512,7=RIPEMD160
     *         to: pk, 指定验证方公钥，仅在 ecsdsa 或 sm2 时有效
     *         format: "der", 指定签名格式，可选为 der 和 raw，缺省为 der
     *         recoverable: false 指定返回可恢复签名，仅在 secp256k1 有效
     *      }
     *      ```
     * 
     *      @param data 指定要签名的数据
     *      @param opts 指定签名选项
     *      @return 返回签名后的数据
     *      
     */
    sign(data: Class_Buffer, opts?: FIBJS.GeneralObject): Class_Buffer;

    sign(data: Class_Buffer, opts?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用当前算法密码公钥验证数据
     *      opts 支持以下参数:
     *      ```JavaScript
     *      {
     *         alg: 0， 指定签名的 hash 算法，仅在 RSA 时有效，缺省为 0. 支持算法: 0=NONE,1=MD5,2=SHA1,3=SHA224,4=SHA256,5=SHA384,6=SHA512,7=RIPEMD160
     *         to: pk, 指定验证方公钥，仅在 ecsdsa 或 sm2 时有效
     *         format: "der", 指定签名格式，可选为 der 和 raw，缺省为 der
     *      }
     *      ```
     * 
     *      @param data 指定要验证的数据
     *      @param sign 指定要验证的签名
     *      @param opts 指定验证选项
     *      @return 返回验证后的结果
     *      
     */
    verify(data: Class_Buffer, sign: Class_Buffer, opts?: FIBJS.GeneralObject): boolean;

    verify(data: Class_Buffer, sign: Class_Buffer, opts?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: boolean)=>any): void;

}

