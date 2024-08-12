{
    "targets": [
        {
            "target_name": "hashing",
            "sources": [
                "hashing.cc",
                "algorithms/sha256d/sha256d.c",
                "algorithms/sha256d/utils/sph_sha2.c",
                "algorithms/meraki/meraki.cpp",
                "algorithms/meraki/meraki_progpow.cpp",
                "algorithms/meraki/utils/ethash/primes.c",
                "algorithms/meraki/utils/keccak/keccak.c",
                "algorithms/meraki/utils/keccak/keccakf800.c",
                "algorithms/meraki/utils/keccak/keccakf1600.c",
                "algorithms/meraki/utils/utilstrencodings.cpp",
            ],
            "include_dirs": [
                ".",
                "<!(node -e \"require('nan')\")",
            ],
            "cflags_cc": [
                "-std=c++0x",
                "-fPIC",
                "-fexceptions"
            ],
            "defines": [
                "HAVE_DECL_STRNLEN=1",
                "HAVE_BYTESWAP_H=1"
            ],
            "link_settings": {
                "libraries": [
                    "-Wl,-rpath,./build/Release/",
                ]
            },
            'conditions': [
                ['OS=="mac"', {
                    'xcode_settings': {
                        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                    }
                }]
            ]
        }
    ]
}
