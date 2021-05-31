setTimeout(function() {
    var _0x7043x1 = document['getElementById']('preloader');
    if (_0x7043x1) {
        _0x7043x1['classList']['add']('preloader-hide')
    }
}, 150);
localStorage['setItem']('Admin', 'Prasad Bobby, 6300807459, 9542109121')
document['addEventListener']('DOMContentLoaded', () => {
    'use strict';
    let _0x7043x2 = true;
    let _0x7043x3 = true;
    var _0x7043x4 = 'Need AP';
    var _0x7043x5 = 1;
    var _0x7043x6 = false;
    var _0x7043x7 = '/';
    var _0x7043x8 = '_service-worker.js';

    function _0x7043x9() {
        var _0x7043xa, _0x7043xb, _0x7043xc;
        var _0x7043xd = document['getElementsByClassName']('menu-hider');
        if (!_0x7043xd['length']) {
            document['body']['innerHTML'] += '<div class=\"menu-hider\"></div>'
        };
        if (_0x7043xd[0]['classList']['contains']('menu-active')) {
            _0x7043xd[0]['classList']['remove']('menu-active')
        };
        document['querySelectorAll']('.menu')['forEach']((_0x7043xc) => {
            _0x7043xc['style']['display'] = 'block'
        });
        var _0x7043xe = document['querySelectorAll']('input');
        if (_0x7043xe['length']) {
            var _0x7043xf = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x7043x10 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x7043x11 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x7043x12 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x7043x13 = /^(0|[1-9]\d*)$/;
            var _0x7043x14 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x7043x15 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

            function _0x7043x16(_0x7043xc) {
                _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }

            function _0x7043x17(_0x7043xc) {
                _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled')
            }

            function _0x7043x18(_0x7043xc) {
                _0x7043xc['parentElement']['querySelectorAll']('em')[0]['classList']['remove']('disabled');
                _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
            }
            var _0x7043x19 = document['querySelectorAll']('.input-style input:not([type=\"date\"])');
            _0x7043x19['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('keyup', (_0x7043xb) => {
                    if (!_0x7043xc['value'] == '') {
                        _0x7043xc['parentElement']['classList']['add']('input-style-active');
                        _0x7043xc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['add']('disabled');
                        _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled');
                        _0x7043xc['parentElement']['classList']['remove']('input-style-active');
                        _0x7043xc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x7043x1a = document['querySelectorAll']('.input-style textarea');
            _0x7043x1a['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('keyup', (_0x7043xb) => {
                    if (!_0x7043xc['value'] == '') {
                        _0x7043xc['parentElement']['classList']['add']('input-style-active');
                        _0x7043xc['parentElement']['querySelector']('em')['classList']['add']('disabled')
                    } else {
                        _0x7043xc['parentElement']['classList']['remove']('input-style-active');
                        _0x7043xc['parentElement']['querySelector']('em')['classList']['remove']('disabled')
                    }
                })
            });
            var _0x7043x1b = document['querySelectorAll']('.input-style select');
            _0x7043x1b['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('change', (_0x7043xb) => {
                    if (_0x7043xc['value'] !== 'default') {
                        _0x7043xc['parentElement']['classList']['add']('input-style-active');
                        _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                        _0x7043xc['parentElement']['querySelectorAll']('.invalid, em, span')[0]['classList']['add']('disabled')
                    };
                    if (_0x7043xc['value'] == 'default') {
                        _0x7043xc['parentElement']['querySelectorAll']('span, .valid, em')[0]['classList']['add']('disabled');
                        _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['remove']('disabled');
                        _0x7043xc['parentElement']['classList']['add']('input-style-active')
                    }
                })
            });
            var _0x7043x1c = document['querySelectorAll']('.input-style input[type=\"date\"]');
            _0x7043x1c['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('change', (_0x7043xb) => {
                    _0x7043xc['parentElement']['classList']['add']('input-style-active');
                    _0x7043xc['parentElement']['querySelectorAll']('.valid')[0]['classList']['remove']('disabled');
                    _0x7043xc['parentElement']['querySelectorAll']('.invalid')[0]['classList']['add']('disabled')
                })
            });
            var _0x7043x1d = document['querySelectorAll']('.validate-field input, .validator-field textarea');
            if (_0x7043x1d['length']) {
                _0x7043x1d['forEach']((_0x7043xc) => {
                    return _0x7043xc['addEventListener']('keyup', (_0x7043xb) => {
                        var _0x7043x1e = _0x7043xc['getAttribute']('type');
                        switch (_0x7043x1e) {
                            case 'name':
                                _0x7043x11['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'number':
                                _0x7043x13['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'email':
                                _0x7043xf['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'text':
                                _0x7043x15['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'url':
                                _0x7043x14['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'tel':
                                _0x7043x10['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break;
                            case 'password':
                                _0x7043x12['test'](_0x7043xc['value']) ? _0x7043x16(_0x7043xc) : _0x7043x17(_0x7043xc);
                                break
                        };
                        if (_0x7043xc['value'] === '') {
                            _0x7043x18(_0x7043xc)
                        }
                    })
                })
            }
        };
        var _0x7043x1f = document['getElementsByClassName']('splide');
        if (_0x7043x1f['length']) {
            var _0x7043x20 = document['querySelectorAll']('.single-slider');
            if (_0x7043x20['length']) {
                _0x7043x20['forEach'](function(_0x7043xb) {
                    var _0x7043x21 = new Splide('#' + _0x7043xb['id'], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    })['mount']();
                    var _0x7043x22 = document['querySelectorAll']('.slider-next');
                    var _0x7043x23 = document['querySelectorAll']('.slider-prev');
                    _0x7043x22['forEach']((_0x7043xc) => {
                        return _0x7043xc['addEventListener']('click', (_0x7043xc) => {
                            _0x7043x21['go']('>')
                        })
                    });
                    _0x7043x23['forEach']((_0x7043xc) => {
                        return _0x7043xc['addEventListener']('click', (_0x7043xc) => {
                            _0x7043x21['go']('<')
                        })
                    })
                })
            };
            var _0x7043x24 = document['querySelectorAll']('.double-slider');
            if (_0x7043x24['length']) {
                _0x7043x24['forEach'](function(_0x7043xb) {
                    var _0x7043x25 = new Splide('#' + _0x7043xb['id'], {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    })['mount']()
                })
            };
            var _0x7043x26 = document['querySelectorAll']('.tripple-slider');
            if (_0x7043x26['length']) {
                _0x7043x26['forEach'](function(_0x7043xb) {
                    var _0x7043x27 = new Splide('#' + _0x7043xb['id'], {
                        type: 'loop',
                        autoplay: true,
                        padding: {
                            left: '0px',
                            right: '80px'
                        },
                        interval: 4000,
                        arrows: false,
                        perPage: 2,
                        perMove: 1
                    })['mount']()
                })
            }
        };
        var _0x7043x28 = document['querySelectorAll']('.topic-slider');
        if (_0x7043x28['length']) {
            var _0x7043x29 = new Splide('.topic-slider', {
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '15px',
                    right: '40px'
                },
                arrows: false,
                perPage: 3,
                perMove: 1
            })['mount']()
        };
        var _0x7043x2a = document['querySelectorAll']('.story-slider');
        if (_0x7043x2a['length']) {
            var _0x7043x29 = new Splide('.story-slider', {
                type: 'loop',
                autoplay: false,
                padding: {
                    left: '0px',
                    right: '40px'
                },
                arrows: false,
                perPage: 4,
                perMove: 1
            })['mount']()
        };
        const _0x7043x2b = document['querySelectorAll']('a[href=\"#\"]');
        _0x7043x2b['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                _0x7043xb['preventDefault']();
                return false
            })
        });
        var _0x7043x2c = document['querySelectorAll']('.hide-map');
        if (_0x7043x2c['length']) {
            var _0x7043x2d = document['querySelectorAll']('.show-map');
            var _0x7043x2e = document['querySelectorAll']('.hide-map');
            _0x7043x2d[0]['addEventListener']('click', function(_0x7043xb) {
                document['getElementsByClassName']('card-overlay')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('card-center')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('hide-map')[0]['classList']['remove']('disabled')
            });
            _0x7043x2e[0]['addEventListener']('click', function(_0x7043xb) {
                document['getElementsByClassName']('card-overlay')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('card-center')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('hide-map')[0]['classList']['add']('disabled')
            })
        };
        var _0x7043x2f = document['querySelectorAll']('.check-card');
        _0x7043x2f['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                if (_0x7043xc['querySelector']('input')['getAttribute']('checked') == 'checked') {
                    _0x7043xc['querySelector']('input')['removeAttribute']('checked')
                } else {
                    _0x7043xc['querySelector']('input')['setAttribute']('checked', 'checked')
                }
            })
        });
        var _0x7043x30 = document['querySelectorAll']('.todo-list a');
        _0x7043x30['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                _0x7043xc['classList']['toggle']('opacity-80');
                if (_0x7043xc['querySelector']('input')['getAttribute']('checked') == 'checked') {
                    _0x7043xc['querySelector']('input')['removeAttribute']('checked')
                } else {
                    _0x7043xc['querySelector']('input')['setAttribute']('checked', 'checked')
                }
            })
        });
        var _0x7043x31 = document['querySelectorAll']('.menu');

        function _0x7043x32() {
            if (_0x7043x31['length']) {
                var _0x7043x33 = document['querySelectorAll']('.menu-box-left, .menu-box-right');
                _0x7043x33['forEach'](function(_0x7043xb) {
                    if (_0x7043xb['getAttribute']('data-menu-width') === 'cover') {
                        _0x7043xb['style']['width'] = '100%'
                    } else {
                        _0x7043xb['style']['width'] = (_0x7043xb['getAttribute']('data-menu-width')) + 'px'
                    }
                });
                var _0x7043x34 = document['querySelectorAll']('.menu-box-bottom, .menu-box-top, .menu-box-modal');
                _0x7043x34['forEach'](function(_0x7043xb) {
                    if (_0x7043xb['getAttribute']('data-menu-width') === 'cover') {
                        _0x7043xb['style']['width'] = '100%';
                        _0x7043xb['style']['height'] = '100%'
                    } else {
                        _0x7043xb['style']['width'] = (_0x7043xb['getAttribute']('data-menu-width')) + 'px';
                        _0x7043xb['style']['height'] = (_0x7043xb['getAttribute']('data-menu-height')) + 'px'
                    }
                });
                var _0x7043x35 = document['querySelectorAll']('[data-menu]');
                var _0x7043x36 = document['querySelectorAll']('.header, #footer-bar, .page-content');
                _0x7043x35['forEach']((_0x7043xc) => {
                    return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                        const _0x7043x37 = document['querySelectorAll']('.menu-active');
                        for (let _0x7043xa = 0; _0x7043xa < _0x7043x37['length']; _0x7043xa++) {
                            _0x7043x37[_0x7043xa]['classList']['remove']('menu-active')
                        };
                        var _0x7043x38 = _0x7043xc['getAttribute']('data-menu');
                        document['getElementById'](_0x7043x38)['classList']['add']('menu-active');
                        document['getElementsByClassName']('menu-hider')[0]['classList']['add']('menu-active');
                        var _0x7043x39 = document['getElementById'](_0x7043x38);
                        var _0x7043x3a = _0x7043x39['getAttribute']('data-menu-effect');
                        var _0x7043x3b = _0x7043x39['classList']['contains']('menu-box-left');
                        var _0x7043x3c = _0x7043x39['classList']['contains']('menu-box-right');
                        var _0x7043x3d = _0x7043x39['classList']['contains']('menu-box-top');
                        var _0x7043x3e = _0x7043x39['classList']['contains']('menu-box-bottom');
                        var _0x7043x3f = _0x7043x39['offsetWidth'];
                        var _0x7043x40 = _0x7043x39['offsetHeight'];
                        var _0x7043x41 = _0x7043x39['getAttribute']('data-menu-hide');
                        if (_0x7043x41) {
                            setTimeout(function() {
                                document['getElementById'](_0x7043x38)['classList']['remove']('menu-active');
                                document['getElementsByClassName']('menu-hider')[0]['classList']['remove']('menu-active')
                            }, _0x7043x41)
                        };
                        if (_0x7043x3a === 'menu-push') {
                            var _0x7043x3f = document['getElementById'](_0x7043x38)['getAttribute']('data-menu-width');
                            if (_0x7043x3b) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateX(' + _0x7043x3f + 'px)'
                                }
                            };
                            if (_0x7043x3c) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateX(-' + _0x7043x3f + 'px)'
                                }
                            };
                            if (_0x7043x3e) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateY(-' + _0x7043x40 + 'px)'
                                }
                            };
                            if (_0x7043x3d) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateY(' + _0x7043x40 + 'px)'
                                }
                            }
                        };
                        if (_0x7043x3a === 'menu-parallax') {
                            var _0x7043x3f = document['getElementById'](_0x7043x38)['getAttribute']('data-menu-width');
                            if (_0x7043x3b) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateX(' + _0x7043x3f / 10 + 'px)'
                                }
                            };
                            if (_0x7043x3c) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateX(-' + _0x7043x3f / 10 + 'px)'
                                }
                            };
                            if (_0x7043x3e) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateY(-' + _0x7043x40 / 5 + 'px)'
                                }
                            };
                            if (_0x7043x3d) {
                                for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                                    _0x7043x36[_0x7043xa]['style']['transform'] = 'translateY(' + _0x7043x40 / 5 + 'px)'
                                }
                            }
                        }
                    })
                });
                const _0x7043x42 = document['querySelectorAll']('.close-menu, .menu-hider');
                _0x7043x42['forEach']((_0x7043xc) => {
                    return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                        const _0x7043x37 = document['querySelectorAll']('.menu-active');
                        for (let _0x7043xa = 0; _0x7043xa < _0x7043x37['length']; _0x7043xa++) {
                            _0x7043x37[_0x7043xa]['classList']['remove']('menu-active')
                        };
                        for (let _0x7043xa = 0; _0x7043xa < _0x7043x36['length']; _0x7043xa++) {
                            _0x7043x36[_0x7043xa]['style']['transform'] = 'translateX(-' + 0 + 'px)'
                        }
                    })
                })
            }
        }
        _0x7043x32();

        function _0x7043x43() {
            const _0x7043x44 = document['querySelectorAll']('[data-menu-active]')[0];
            if (_0x7043x44) {
                var _0x7043x45 = _0x7043x44['getAttribute']('data-menu-active');
                document['querySelectorAll']('#' + _0x7043x45)[0]['classList']['add']('active-nav')
            }
        }
        const _0x7043x46 = document['querySelectorAll']('[data-back-button]');
        if (_0x7043x46['length']) {
            _0x7043x46['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    _0x7043xb['stopPropagation'];
                    _0x7043xb['preventDefault'];
                    window['history']['go'](-1)
                })
            })
        };

        function _0x7043x47() {
            const _0x7043x48 = document['querySelectorAll']('.back-to-top-icon, .back-to-top-badge, .back-to-top');
            if (_0x7043x48) {
                _0x7043x48['forEach']((_0x7043xc) => {
                    return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                        window['scrollTo']({
                            top: 0,
                            behavior: `${'smooth'}`
                        })
                    })
                })
            }
        }
        const _0x7043x49 = document['getElementsByClassName']('card');

        function _0x7043x4a() {
            var _0x7043x4b, _0x7043x4c, _0x7043x4d;
            var _0x7043x4d = document['querySelectorAll']('.header:not(.header-transparent)')[0];
            var _0x7043x4e = document['querySelectorAll']('#footer-bar')[0];
            _0x7043x4d ? _0x7043x4b = document['querySelectorAll']('.header')[0]['offsetHeight'] : _0x7043x4b = 0;
            _0x7043x4e ? _0x7043x4c = document['querySelectorAll']('#footer-bar')[0]['offsetHeight'] : _0x7043x4c = 0;
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x49['length']; _0x7043xa++) {
                if (_0x7043x49[_0x7043xa]['getAttribute']('data-card-height') === 'cover') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x7043x4f = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x7043x4f = window['innerHeight']
                    };
                    var _0x7043x50 = _0x7043x4f - _0x7043x4b - _0x7043x4c + 'px'
                };
                if (_0x7043x49[_0x7043xa]['getAttribute']('data-card-height') === 'cover-card') {
                    var _0x7043x4f = window['outerHeight'];
                    var _0x7043x50 = _0x7043x4f - 275 + 'px';
                    _0x7043x49[_0x7043xa]['style']['height'] = _0x7043x50
                };
                if (_0x7043x49[_0x7043xa]['getAttribute']('data-card-height') === 'cover-full') {
                    if (window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x7043x4f = window['outerHeight']
                    };
                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                        var _0x7043x4f = window['innerHeight']
                    };
                    var _0x7043x50 = _0x7043x4f + 'px';
                    _0x7043x49[_0x7043xa]['style']['height'] = _0x7043x50
                };
                if (_0x7043x49[_0x7043xa]['hasAttribute']('data-card-height')) {
                    var _0x7043x51 = _0x7043x49[_0x7043xa]['getAttribute']('data-card-height');
                    _0x7043x49[_0x7043xa]['style']['height'] = _0x7043x51 + 'px';
                    if (_0x7043x51 === 'cover') {
                        var _0x7043x52 = _0x7043x51;
                        _0x7043x49[_0x7043xa]['style']['height'] = _0x7043x50
                    }
                }
            }
        }
        if (_0x7043x49['length']) {
            _0x7043x4a();
            window['addEventListener']('resize', _0x7043x4a)
        };

        function _0x7043x53() {
            var _0x7043x54 = localStorage['getItem'](_0x7043x4 + '-Highlight');
            if (_0x7043x54) {
                document['querySelectorAll']('[data-change-highlight=\"' + _0x7043x54 + '\"]')[0]['classList']['add']('highlight-active');
                document['body']['setAttribute']('data-highlight', _0x7043x54)
            }
        }

        function _0x7043x55() {
            var _0x7043x56 = document['querySelectorAll']('[data-change-highlight]');
            _0x7043x56['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    const _0x7043x57 = document['querySelectorAll']('.highlight-active');
                    for (let _0x7043xa = 0; _0x7043xa < _0x7043x57['length']; _0x7043xa++) {
                        _0x7043x57[_0x7043xa]['classList']['remove']('highlight-active')
                    };
                    _0x7043xc['classList']['add']('highlight-active');
                    var _0x7043x58 = _0x7043xc['getAttribute']('data-change-highlight');
                    var _0x7043x59 = document['querySelectorAll']('.page-highlight');
                    if (_0x7043x59['length']) {
                        _0x7043x59['forEach'](function(_0x7043xb) {
                            _0x7043xb['remove']()
                        })
                    };
                    var _0x7043x5a = document['createElement']('link');
                    _0x7043x5a['rel'] = 'stylesheet';
                    _0x7043x5a['className'] = 'page-highlight';
                    _0x7043x5a['type'] = 'text/css';
                    _0x7043x5a['href'] = 'styles/highlights/highlight_' + _0x7043x58 + '.css';
                    document['getElementsByTagName']('head')[0]['appendChild'](_0x7043x5a);
                    document['body']['setAttribute']('data-highlight', 'highlight-' + _0x7043x58);
                    localStorage['setItem'](_0x7043x4 + '-Highlight', _0x7043x58)
                })
            });
            var _0x7043x54 = localStorage['getItem'](_0x7043x4 + '-Highlight');
            if (_0x7043x54) {
                var _0x7043x5a = document['createElement']('link');
                _0x7043x5a['rel'] = 'stylesheet';
                _0x7043x5a['className'] = 'page-highlight';
                _0x7043x5a['type'] = 'text/css';
                _0x7043x5a['href'] = 'styles/highlights/highlight_' + _0x7043x54 + '.css';
                if (!document['querySelectorAll']('.page-highlight')['length']) {
                    document['getElementsByTagName']('head')[0]['appendChild'](_0x7043x5a);
                    document['body']['setAttribute']('data-highlight', 'highlight-' + _0x7043x54)
                }
            }
        }
        _0x7043x55();
        var _0x7043x5b = document['querySelectorAll']('[data-change-background]');
        _0x7043x5b['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                var _0x7043x5c = _0x7043xc['getAttribute']('data-change-background');
                document['body']['setAttribute']('data-gradient', 'body-' + _0x7043x5c + '');
                localStorage['setItem'](_0x7043x4 + '-Gradient', _0x7043x5c)
            })
        });
        var _0x7043x5d = localStorage['getItem'](_0x7043x4 + '-Gradient');
        if (_0x7043x5d) {
            document['body']['setAttribute']('data-gradient', 'body-' + _0x7043x5d + '')
        };

        function _0x7043x5e() {
            const _0x7043x5f = document['querySelectorAll']('[data-toggle-theme]');

            function _0x7043x60() {
                document['body']['classList']['add']('theme-dark');
                document['body']['classList']['remove']('theme-light', 'detect-theme');
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x5f['length']; _0x7043xa++) {
                    _0x7043x5f[_0x7043xa]['checked'] = 'checked'
                };
                localStorage['setItem'](_0x7043x4 + '-Theme', 'dark-mode')
            }

            function _0x7043x61() {
                document['body']['classList']['add']('theme-light');
                document['body']['classList']['remove']('theme-dark', 'detect-theme');
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x5f['length']; _0x7043xa++) {
                    _0x7043x5f[_0x7043xa]['checked'] = false
                };
                localStorage['setItem'](_0x7043x4 + '-Theme', 'light-mode')
            }

            function _0x7043x62() {
                var _0x7043x63 = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x63['length']; _0x7043xa++) {
                    _0x7043x63[_0x7043xa]['style']['transition'] = 'all 0s ease'
                }
            }

            function _0x7043x64() {
                var _0x7043x65 = document['querySelectorAll']('.btn, .header, #footer-bar, .menu-box, .menu-active');
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x65['length']; _0x7043xa++) {
                    _0x7043x65[_0x7043xa]['style']['transition'] = ''
                }
            }

            function _0x7043x66() {
                const _0x7043x67 = window['matchMedia']('(prefers-color-scheme: dark)')['matches'];
                const _0x7043x68 = window['matchMedia']('(prefers-color-scheme: light)')['matches'];
                const _0x7043x69 = window['matchMedia']('(prefers-color-scheme: no-preference)')['matches'];
                window['matchMedia']('(prefers-color-scheme: dark)')['addListener']((_0x7043xb) => {
                    return _0x7043xb['matches'] && _0x7043x60()
                });
                window['matchMedia']('(prefers-color-scheme: light)')['addListener']((_0x7043xb) => {
                    return _0x7043xb['matches'] && _0x7043x61()
                });
                if (_0x7043x67) {
                    _0x7043x60()
                };
                if (_0x7043x68) {
                    _0x7043x61()
                }
            }
            var _0x7043x6a = document['querySelectorAll']('[data-toggle-theme]');
            _0x7043x6a['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    if (document['body']['className'] == 'theme-light') {
                        _0x7043x62();
                        _0x7043x60()
                    } else {
                        if (document['body']['className'] == 'theme-dark') {
                            _0x7043x62();
                            _0x7043x61()
                        }
                    };
                    setTimeout(function() {
                        _0x7043x64()
                    }, 350)
                })
            });
            if (localStorage['getItem'](_0x7043x4 + '-Theme') == 'dark-mode') {
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x5f['length']; _0x7043xa++) {
                    _0x7043x5f[_0x7043xa]['checked'] = 'checked'
                };
                document['body']['className'] = 'theme-dark'
            };
            if (localStorage['getItem'](_0x7043x4 + '-Theme') == 'light-mode') {
                document['body']['className'] = 'theme-light'
            };
            if (document['body']['className'] == 'detect-theme') {
                _0x7043x66()
            };
            const _0x7043x6b = document['querySelectorAll']('.detect-dark-mode');
            _0x7043x6b['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    document['body']['classList']['remove']('theme-light', 'theme-dark');
                    document['body']['classList']['add']('detect-theme');
                    setTimeout(function() {
                        _0x7043x66()
                    }, 50)
                })
            })
        }
        if (localStorage['getItem'](_0x7043x4 + '-Theme') == 'dark-mode') {
            document['body']['className'] = 'theme-dark'
        };
        if (localStorage['getItem'](_0x7043x4 + '-Theme') == 'light-mode') {
            document['body']['className'] = 'theme-light'
        };
        const _0x7043x6c = document['querySelectorAll']('.accordion-btn');
        if (_0x7043x6c['length']) {
            _0x7043x6c['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    _0x7043xc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180')
                })
            })
        };
        const _0x7043x6e = document['getElementsByClassName']('upload-file');
        if (_0x7043x6e['length']) {
            _0x7043x6e[0]['addEventListener']('change', _0x7043x6f, false);

            function _0x7043x6f(_0x7043x6d) {
                if (this['files'] && this['files'][0]) {
                    var _0x7043x70 = document['getElementById']('image-data');
                    _0x7043x70['src'] = URL['createObjectURL'](this['files'][0])
                };
                const _0x7043x71 = _0x7043x6d['target']['files'];
                const _0x7043x72 = _0x7043x71[0]['name'];
                document['getElementsByClassName']('file-data')[0]['classList']['add']('disabled');
                document['getElementsByClassName']('upload-file-data')[0]['classList']['remove']('disabled');
                document['getElementsByClassName']('upload-file-name')[0]['innerHTML'] = _0x7043x71[0]['name'];
                document['getElementsByClassName']('upload-file-modified')[0]['innerHTML'] = _0x7043x71[0]['lastModifiedDate'];
                document['getElementsByClassName']('upload-file-size')[0]['innerHTML'] = _0x7043x71[0]['size'] / 1000 + 'kb';
                document['getElementsByClassName']('upload-file-type')[0]['innerHTML'] = _0x7043x71[0]['type']
            }
        };
        var _0x7043x73 = document['querySelectorAll']('.get-location');
        if (_0x7043x73['length']) {
            var _0x7043x74 = document['getElementsByClassName']('location-support')[0];
            if (typeof(_0x7043x74) != 'undefined' && _0x7043x74 != null) {
                if ('geolocation' in navigator) {
                    _0x7043x74['innerHTML'] = 'Your browser and device <strong class=\"color-green2-dark\">support</strong> Geolocation.'
                } else {
                    _0x7043x74['innerHTML'] = 'Your browser and device <strong class=\"color-red2-dark\">support</strong> Geolocation.'
                }
            };

            function _0x7043x75() {
                const _0x7043x76 = document['querySelector']('.location-coordinates');

                function _0x7043x77(_0x7043x78) {
                    const _0x7043x79 = _0x7043x78['coords']['latitude'];
                    const _0x7043x7a = _0x7043x78['coords']['longitude'];
                    _0x7043x76['innerHTML'] = '<strong>Longitude:</strong> ' + _0x7043x7a + '<br><strong>Latitude:</strong> ' + _0x7043x79;
                    var _0x7043x7b = 'https://maps.google.com/maps?q=';
                    var _0x7043x7c = _0x7043x79 + ',';
                    var _0x7043x7d = _0x7043x7a;
                    var _0x7043x7e = '&z=18&t=h&output=embed';
                    var _0x7043x7f = '&z=18&t=h';
                    var _0x7043x80 = _0x7043x7b + _0x7043x7c + _0x7043x7d + _0x7043x7e;
                    var _0x7043x81 = _0x7043x7b + _0x7043x7c + _0x7043x7d + _0x7043x7f;
                    document['getElementsByClassName']('location-map')[0]['setAttribute']('src', _0x7043x80);
                    document['getElementsByClassName']('location-button')[0]['setAttribute']('href', _0x7043x81);
                    document['getElementsByClassName']('location-button')[0]['classList']['remove']('disabled')
                }

                function _0x7043x82() {
                    _0x7043x76['textContent'] = 'Unable to retrieve your location'
                }
                if (!navigator['geolocation']) {
                    _0x7043x76['textContent'] = 'Geolocation is not supported by your browser'
                } else {
                    _0x7043x76['textContent'] = 'Locating';
                    navigator['geolocation']['getCurrentPosition'](_0x7043x77, _0x7043x82)
                }
            }
            var _0x7043x83 = document['getElementsByClassName']('get-location')[0];
            if (typeof(_0x7043x83) != 'undefined' && _0x7043x83 != null) {
                _0x7043x83['addEventListener']('click', function() {
                    this['classList']['add']('disabled');
                    _0x7043x75()
                })
            }
        };
        const _0x7043x84 = document['querySelectorAll']('.card-scale');
        if (_0x7043x84['length']) {
            _0x7043x84['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseenter', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['add']('card-scale-image')
                })
            });
            _0x7043x84['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseleave', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['remove']('card-scale-image')
                })
            })
        };
        const _0x7043x85 = document['querySelectorAll']('.card-hide');
        if (_0x7043x85['length']) {
            _0x7043x85['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseenter', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['add']('card-hide-image')
                })
            });
            _0x7043x85['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseleave', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('.card-center, .card-bottom, .card-top, .card-overlay')[0]['classList']['remove']('card-hide-image')
                })
            })
        };
        const _0x7043x86 = document['querySelectorAll']('.card-rotate');
        if (_0x7043x86['length']) {
            _0x7043x86['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseenter', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['add']('card-rotate-image')
                })
            });
            _0x7043x86['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseleave', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['remove']('card-rotate-image')
                })
            })
        };
        const _0x7043x87 = document['querySelectorAll']('.card-grayscale');
        if (_0x7043x87['length']) {
            _0x7043x87['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseenter', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['add']('card-grayscale-image')
                })
            });
            _0x7043x87['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseleave', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['remove']('card-grayscale-image')
                })
            })
        };
        const _0x7043x88 = document['querySelectorAll']('.card-blur');
        if (_0x7043x88['length']) {
            _0x7043x88['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseenter', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['add']('card-blur-image')
                })
            });
            _0x7043x88['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseleave', (_0x7043x6d) => {
                    _0x7043xc['querySelectorAll']('img')[0]['classList']['remove']('card-blur-image')
                })
            })
        };
        var _0x7043x89 = document['querySelectorAll']('.check-visited');
        if (_0x7043x89['length']) {
            function _0x7043x8a() {
                var _0x7043x8b = JSON['parse'](localStorage['getItem'](_0x7043x4 + '_Visited_Links')) || [];
                var _0x7043x8c = document['querySelectorAll']('.check-visited a');
                for (let _0x7043xa = 0; _0x7043xa < _0x7043x8c['length']; _0x7043xa++) {
                    var _0x7043x8d = _0x7043x8c[_0x7043xa];
                    _0x7043x8d['addEventListener']('click', function(_0x7043xb) {
                        var _0x7043x8e = this['href'];
                        if (_0x7043x8b['indexOf'](_0x7043x8e) == -1) {
                            _0x7043x8b['push'](_0x7043x8e);
                            localStorage['setItem'](_0x7043x4 + '_Visited_Links', JSON['stringify'](_0x7043x8b))
                        }
                    });
                    if (_0x7043x8b['indexOf'](_0x7043x8d['href']) !== -1) {
                        _0x7043x8d['className'] += ' visited-link'
                    }
                }
            }
            _0x7043x8a()
        };
        var _0x7043x8f = document['querySelectorAll']('.footer-bar-6')[0];
        if (_0x7043x8f) {
            var _0x7043x90 = document['querySelectorAll']('.footer-bar-6 .active-nav')[0];
            var _0x7043x91 = document['querySelectorAll']('.footer-bar-6 .circle-nav')[0];
            _0x7043x90['insertAdjacentHTML']('beforeend', '<em></em>');
            _0x7043x91['insertAdjacentHTML']('beforeend', '<strong><u></u></strong>')
        };
        var _0x7043x92 = document['getElementById']('adblock-message');
        if (_0x7043x92) {
            var _0x7043x93 = false;
            document['body']['innerHTML'] += '<div class=\"adsbygoogle\" id=\"ad-detector\"></div>';
            var _0x7043x94 = document['getElementById']('ad-detector');
            var _0x7043x95 = getComputedStyle(_0x7043x94, null);
            if (_0x7043x95['display'] === 'none') {
                document['getElementById']('adblock-message')['classList']['remove']('disabled')
            }
        };
        let _0x7043x96 = document['querySelectorAll']('.fixed-ad')[0];
        let _0x7043x97 = document['querySelectorAll']('.scroll-ad')[0];
        if (_0x7043x96 || _0x7043x97) {
            var _0x7043x98 = document['getElementById']('activate-scroll-ad');
            _0x7043x98['addEventListener']('click', function() {
                _0x7043x97['classList']['add']('scroll-ad-visible');
                _0x7043x97['classList']['remove']('disabled');
                _0x7043x96['classList']['add']('disabled')
            });
            var _0x7043x99 = document['getElementById']('activate-fixed-ad');
            _0x7043x99['addEventListener']('click', function() {
                _0x7043x97['classList']['add']('disabled');
                _0x7043x96['classList']['remove']('disabled')
            })
        };
        var _0x7043x9a = document['querySelectorAll']('.scroll-ad, .header-auto-show');
        if (_0x7043x9a['length']) {
            var _0x7043x9b = document['querySelectorAll']('.scroll-ad');
            var _0x7043x9c = document['querySelectorAll']('.header-auto-show');
            var _0x7043x9d = document['querySelectorAll']('.page-title');
            window['addEventListener']('scroll', function() {
                if (document['querySelectorAll']('.scroll-ad, .header-auto-show')['length']) {
                    function _0x7043x9e() {
                        _0x7043x9b[0]['classList']['add']('scroll-ad-visible')
                    }

                    function _0x7043x9f() {
                        _0x7043x9b[0]['classList']['remove']('scroll-ad-visible')
                    }

                    function _0x7043xa0() {
                        _0x7043x9c[0]['classList']['add']('header-active')
                    }

                    function _0x7043xa1() {
                        _0x7043x9c[0]['classList']['remove']('header-active')
                    }

                    function _0x7043xa2() {
                        _0x7043x9d[0]['style']['opacity'] = '0'
                    }

                    function _0x7043xa3() {
                        _0x7043x9d[0]['style']['opacity'] = '1'
                    }
                    var _0x7043xa4 = window['outerWidth'];
                    var _0x7043xa5 = document['documentElement']['scrollTop'];
                    let _0x7043xa6 = _0x7043xa5 <= 80;
                    var _0x7043xa7 = _0x7043xa5 >= 80;
                    let _0x7043xa8 = _0x7043xa5 <= 40;
                    var _0x7043xa9 = _0x7043xa5 >= 40;
                    let _0x7043xaa = (_0x7043xa4 - _0x7043xa5 + 1000) <= 150;
                    if (_0x7043x9b['length']) {
                        _0x7043xa6 ? _0x7043x9f() : null;
                        _0x7043xa7 ? _0x7043x9e() : null;
                        _0x7043xaa ? _0x7043x9f() : null
                    };
                    if (_0x7043x9c['length']) {
                        _0x7043xa6 ? _0x7043xa1() : null;
                        _0x7043xa7 ? _0x7043xa0() : null
                    };
                    if (_0x7043x9d['length']) {
                        _0x7043xa8 ? _0x7043xa3() : null;
                        _0x7043xa9 ? _0x7043xa2() : null
                    }
                }
            })
        };
        var _0x7043xab = document['querySelectorAll']('.stepper-add');
        var _0x7043xac = document['querySelectorAll']('.stepper-sub');
        if (_0x7043xab['length']) {
            _0x7043xab['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    var _0x7043xad = _0x7043xc['parentElement']['querySelector']('input')['value'];
                    _0x7043xc['parentElement']['querySelector']('input')['value'] = +_0x7043xad + 1
                })
            });
            _0x7043xac['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    var _0x7043xad = _0x7043xc['parentElement']['querySelector']('input')['value'];
                    _0x7043xc['parentElement']['querySelector']('input')['value'] = +_0x7043xad - 1
                })
            })
        };
        var _0x7043xae = document['querySelectorAll']('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x7043xae['length']) {
            _0x7043xae['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    var _0x7043xaf = _0x7043xc['getAttribute']('data-trigger-switch');
                    var _0x7043xb0 = document['getElementById'](_0x7043xaf);
                    _0x7043xb0['checked'] ? _0x7043xb0['checked'] = false : _0x7043xb0['checked'] = true
                })
            })
        };
        var _0x7043xb1 = document['querySelectorAll']('.classic-toggle');
        if (_0x7043xb1['length']) {
            _0x7043xb1['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    _0x7043xc['querySelector']('i:last-child')['classList']['toggle']('fa-rotate-180');
                    _0x7043xc['querySelector']('i:last-child')['style']['transition'] = 'all 250ms ease'
                })
            })
        };
        var _0x7043xb2 = document['querySelectorAll']('[data-toast]');
        if (_0x7043xb2['length']) {
            _0x7043xb2['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    var _0x7043xb3 = _0x7043xc['getAttribute']('data-toast');
                    var _0x7043xb4 = document['getElementById'](_0x7043xb3);
                    var _0x7043xb4 = new bootstrap.Toast(_0x7043xb4);
                    _0x7043xb4['show']()
                })
            })
        };
        var _0x7043xb5 = []['slice']['call'](document['querySelectorAll']('[data-bs-toggle=\"dropdown\"]'));
        if (_0x7043xb5['length']) {
            var _0x7043xb6 = _0x7043xb5['map'](function(_0x7043xb7) {
                return new bootstrap.Dropdown(_0x7043xb7)
            })
        };
        var _0x7043xb8 = document['querySelectorAll']('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x7043xb8['length']) {
            var _0x7043xb9 = new Date();
            var _0x7043xba = _0x7043xb9['getDay']();
            var _0x7043xbb = _0x7043xb9['getHours']() + '.' + _0x7043xb9['getMinutes']();
            var _0x7043xbc = [
                ['Sunday'],
                ['Monday', 9.00, 17.00],
                ['Tuesday', 9.00, 17.00],
                ['Wednesday', 9.00, 17.00],
                ['Thursday', 9.00, 17.00],
                ['Friday', 9.00, 17.00],
                ['Saturday', 9.00, 13.00]
            ];
            var _0x7043xbd = _0x7043xbc[_0x7043xba];
            var _0x7043xbe = document['querySelectorAll']('.show-business-opened');
            var _0x7043xbf = document['querySelectorAll']('.show-business-closed');
            if (_0x7043xbb > _0x7043xbd[1] && _0x7043xbb < _0x7043xbd[2] || _0x7043xbb > _0x7043xbd[3] && _0x7043xbb < _0x7043xbd[4]) {
                _0x7043xbe['forEach'](function(_0x7043xb) {
                    _0x7043xb['classList']['remove']('disabled')
                });
                _0x7043xbf['forEach'](function(_0x7043xb) {
                    _0x7043xb['classList']['add']('disabled')
                })
            } else {
                _0x7043xbe['forEach'](function(_0x7043xb) {
                    _0x7043xb['classList']['add']('disabled')
                });
                _0x7043xbf['forEach'](function(_0x7043xb) {
                    _0x7043xb['classList']['remove']('disabled')
                })
            };
            var _0x7043xb8 = document['querySelectorAll']('.working-hours[data-day]');
            _0x7043xb8['forEach'](function(_0x7043xc0) {
                var _0x7043xc1 = _0x7043xc0['getAttribute']('data-day');
                if (_0x7043xc1 === _0x7043xbd[0]) {
                    var _0x7043xc2 = '[data-day=\"' + _0x7043xbd[0] + '\"]';
                    if (_0x7043xbb > _0x7043xbd[1] && _0x7043xbb < _0x7043xbd[2] || _0x7043xbb > _0x7043xbd[3] && _0x7043xbb < _0x7043xbd[4]) {
                        document['querySelectorAll'](_0x7043xc2)[0]['classList']['add']('bg-green-dark');
                        document['querySelectorAll'](_0x7043xc2 + ' p')['forEach'](function(_0x7043xc3) {
                            _0x7043xc3['classList']['add']('color-white')
                        })
                    } else {
                        document['querySelectorAll'](_0x7043xc2)[0]['classList']['add']('bg-red-dark');
                        document['querySelectorAll'](_0x7043xc2 + ' p')['forEach'](function(_0x7043xc3) {
                            _0x7043xc3['classList']['add']('color-white')
                        })
                    }
                }
            })
        };
        var _0x7043xc4 = document['querySelectorAll']('[data-vibrate]');
        if (_0x7043xc4['length']) {
            var _0x7043xc5 = document['getElementsByClassName']('start-vibrating')[0];
            var _0x7043xc6 = document['getElementsByClassName']('stop-vibrating')[0];
            _0x7043xc5['addEventListener']('click', function() {
                var _0x7043xc7 = document['getElementsByClassName']('vibrate-demo')[0]['value'];
                window['navigator']['vibrate'](_0x7043xc7)
            });
            _0x7043xc6['addEventListener']('click', function() {
                window['navigator']['vibrate'](0)
            });
            _0x7043xc4['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    var _0x7043xc7 = _0x7043xc['getAttribute']('data-vibrate');
                    window['navigator']['vibrate'](_0x7043xc7)
                })
            })
        };
        var _0x7043xc8 = document['querySelectorAll']('[data-timed-ad]');
        if (_0x7043xc8['length']) {
            _0x7043xc8['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    var _0x7043xc9 = _0x7043xc['getAttribute']('data-timed-ad');
                    var _0x7043xca = _0x7043xc['getAttribute']('data-menu');
                    var _0x7043xcb = _0x7043xc9;
                    var _0x7043xcc = setInterval(function() {
                        if (_0x7043xcb <= 1) {
                            clearInterval(_0x7043xcc);
                            document['getElementById'](_0x7043xca)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x7043xca)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x7043xca)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        } else {};
                        document['getElementById'](_0x7043xca)['querySelectorAll']('span')[0]['innerHTML'] = _0x7043xcb -= 1
                    }, 1000)
                })
            })
        };
        var _0x7043xcd = document['querySelectorAll']('[data-auto-show-ad]');
        if (_0x7043xcd['length']) {
            var _0x7043xce = _0x7043xcd[0]['getAttribute']('data-auto-show-ad');
            var _0x7043xcc = setInterval(function() {
                if (_0x7043xce <= 1) {
                    clearInterval(_0x7043xcc);
                    var _0x7043xcf = _0x7043xcd[0]['getAttribute']('data-menu');
                    document['getElementById'](_0x7043xcf)['classList']['add']('menu-active');
                    var _0x7043xd0 = _0x7043xcd[0]['getAttribute']('data-timed-ad');
                    var _0x7043xd1 = setInterval(function() {
                        if (_0x7043xd0 <= 0) {
                            clearInterval(_0x7043xd1);
                            document['getElementById'](_0x7043xcf)['querySelectorAll']('.fa-times')[0]['classList']['remove']('disabled');
                            document['getElementById'](_0x7043xcf)['querySelectorAll']('.close-menu')[0]['classList']['remove']('no-click');
                            document['getElementById'](_0x7043xcf)['querySelectorAll']('span')[0]['style']['display'] = 'none'
                        };
                        document['getElementById'](_0x7043xcf)['querySelectorAll']('span')[0]['innerHTML'] = _0x7043xd0 -= 1
                    }, 1000)
                };
                _0x7043xce -= 1
            }, 1000)
        };
        var _0x7043xd2 = document['querySelectorAll']('.visit-detection')[0];
        if (_0x7043xd2) {
            var _0x7043xd3 = document['querySelectorAll']('.never-visited')[0];
            var _0x7043xd4 = document['querySelectorAll']('.before-visited')[0];
            var _0x7043xd5 = document['querySelectorAll']('.visit-before-time')[0];
            var _0x7043xd6 = localStorage['getItem'](_0x7043x4 + '-Last-Visited');
            var _0x7043xb9 = new Date();
            var _0x7043xd7 = _0x7043xb9['getFullYear']() + '/' + (_0x7043xb9['getMonth']() + 1) + '/' + _0x7043xb9['getDate']();
            var _0x7043xd8 = _0x7043xb9['getHours']() + ':' + _0x7043xb9['getMinutes']() + ':' + _0x7043xb9['getSeconds']();
            if (!_0x7043xd6) {
                _0x7043xd3['style']['display'] = 'block';
                _0x7043xd4['style']['display'] = 'none';
                localStorage['setItem'](_0x7043x4 + '-Last-Visited', 'Your last visit was ' + _0x7043xd7 + ' at ' + _0x7043xd8)
            } else {
                _0x7043xd3['style']['display'] = 'none';
                _0x7043xd4['style']['display'] = 'block';
                _0x7043xd5['append'](_0x7043xd6);
                localStorage['setItem'](_0x7043x4 + '-Last-Visited', 'Your last visit was ' + _0x7043xd7 + ' at ' + _0x7043xd8)
            }
        };
        var _0x7043xd9 = document['querySelectorAll']('.reading-progress-text');
        if (_0x7043xd9['length']) {
            var _0x7043xda = _0x7043xd9[0]['innerHTML']['split'](' ')['length'];
            var _0x7043xdb = Math['floor'](_0x7043xda / 250);
            var _0x7043xdc = _0x7043xda % 60;
            document['getElementsByClassName']('reading-progress-words')[0]['innerHTML'] = _0x7043xda;
            document['getElementsByClassName']('reading-progress-time')[0]['innerHTML'] = _0x7043xdb + ':' + _0x7043xdc
        };
        var _0x7043xdd = document['querySelectorAll']('.text-size-changer');
        if (_0x7043xdd['length']) {
            var _0x7043xde = document['querySelectorAll']('.text-size-increase');
            var _0x7043xdf = document['querySelectorAll']('.text-size-decrease');
            var _0x7043xe0 = document['querySelectorAll']('.text-size-default');
            _0x7043xde[0]['addEventListener']('click', function() {
                _0x7043xdd[0]['querySelectorAll']('*')['forEach'](function(_0x7043xe1) {
                    const _0x7043xe2 = window['getComputedStyle'](_0x7043xe1)['fontSize']['split']('px', 2)[0];
                    _0x7043xe1['style']['fontSize'] = (+_0x7043xe2 + 1) + 'px'
                })
            });
            _0x7043xdf[0]['addEventListener']('click', function() {
                _0x7043xdd[0]['querySelectorAll']('*')['forEach'](function(_0x7043xe1) {
                    const _0x7043xe2 = window['getComputedStyle'](_0x7043xe1)['fontSize']['split']('px', 2)[0];
                    _0x7043xe1['style']['fontSize'] = (+_0x7043xe2 - 1) + 'px'
                })
            });
            _0x7043xe0[0]['addEventListener']('click', function() {
                _0x7043xdd[0]['querySelectorAll']('*')['forEach'](function(_0x7043xe1) {
                    const _0x7043xe2 = window['getComputedStyle'](_0x7043xe1)['fontSize']['split']('px', 2)[0];
                    _0x7043xe1['style']['fontSize'] = ''
                })
            })
        };
        var _0x7043xe3 = document['querySelectorAll']('.qr-image');
        if (_0x7043xe3['length']) {
            var _0x7043xe4 = window['location']['href'];
            var _0x7043xe5 = document['getElementsByClassName']('generate-qr-auto')[0];
            var _0x7043xe6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x7043xe5) {
                _0x7043xe5['setAttribute']('src', _0x7043xe6 + _0x7043xe4)
            };
            var _0x7043xe7 = document['getElementsByClassName']('generate-qr-button')[0];
            if (_0x7043xe7) {
                _0x7043xe7['addEventListener']('click', function() {
                    var _0x7043xe8 = document['getElementsByClassName']('qr-url')[0]['value'];
                    var _0x7043xe6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x7043xe9 = '<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0x7043xe6 + _0x7043xe8 + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0x7043xe8 + '</p>';
                    document['getElementsByClassName']('generate-qr-result')[0]['innerHTML'] = _0x7043xe9;
                    _0x7043xe7['innerHTML'] = 'Generate New Button'
                })
            }
        };
        if (window['location']['protocol'] === 'file:') {
            var _0x7043xea = document['querySelectorAll']('a');
            _0x7043xea['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('mouseover', (_0x7043x6d) => {})
            })
        };
        var _0x7043xeb = document['querySelectorAll']('[data-search]');
        if (_0x7043xeb['length']) {
            var _0x7043xec = document['querySelectorAll']('.search-results');
            var _0x7043xed = document['querySelectorAll']('.search-no-results');
            var _0x7043xee = document['querySelectorAll']('.search-results div')[0]['childElementCount'];
            var _0x7043xef = document['querySelectorAll']('.search-trending');

            function _0x7043xf0() {
                var _0x7043xf1 = _0x7043xeb[0]['value'];
                if (_0x7043xf1 != '') {
                    _0x7043xec[0]['classList']['remove']('disabled-search-list');
                    var _0x7043xf2 = document['querySelectorAll']('[data-filter-item]');
                    for (let _0x7043xa = 0; _0x7043xa < _0x7043xf2['length']; _0x7043xa++) {
                        var _0x7043xf3 = _0x7043xf2[_0x7043xa]['getAttribute']('data-filter-name');
                        if (_0x7043xf3['includes'](_0x7043xf1)) {
                            _0x7043xf2[_0x7043xa]['classList']['remove']('disabled');
                            if (_0x7043xef['length']) {
                                _0x7043xef[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x7043xf2[_0x7043xa]['classList']['add']('disabled');
                            if (_0x7043xef['length']) {
                                _0x7043xef[0]['classList']['remove']('disabled')
                            }
                        };
                        var _0x7043xf4 = document['querySelectorAll']('.search-results div')[0]['getElementsByClassName']('disabled')['length'];
                        if (_0x7043xf4 === _0x7043xee) {
                            _0x7043xed[0]['classList']['remove']('disabled');
                            if (_0x7043xef['length']) {
                                _0x7043xef[0]['classList']['add']('disabled')
                            }
                        } else {
                            _0x7043xed[0]['classList']['add']('disabled');
                            if (_0x7043xef['length']) {
                                _0x7043xef[0]['classList']['add']('disabled')
                            }
                        }
                    }
                };
                if (_0x7043xf1 === '') {
                    _0x7043xec[0]['classList']['add']('disabled-search-list');
                    _0x7043xed[0]['classList']['add']('disabled');
                    if (_0x7043xef['length']) {
                        _0x7043xef[0]['classList']['remove']('disabled')
                    }
                }
            }
            _0x7043xeb[0]['addEventListener']('keyup', function() {
                _0x7043xf0()
            });
            _0x7043xeb[0]['addEventListener']('click', function() {
                _0x7043xf0()
            });
            var _0x7043xf5 = document['querySelectorAll']('.search-trending a');
            _0x7043xf5['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    var _0x7043xf6 = _0x7043xc['querySelectorAll']('span')[0]['textContent']['toLowerCase']();
                    _0x7043xeb[0]['value'] = _0x7043xf6;
                    _0x7043xeb[0]['click']()
                })
            })
        };

        function _0x7043xf7() {
            var _0x7043xf8 = document['querySelectorAll']('.shareToFacebook, .shareToTwitter, .shareToLinkedIn');
            if (_0x7043xf8['length']) {
                var _0x7043xf9 = window['location']['href'];
                var _0x7043xfa = document['title'];
                document['querySelectorAll']('.shareToFacebook')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x7043xf9)
                });
                document['querySelectorAll']('.shareToTwitter')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'https://twitter.com/share?text=' + _0x7043xf9)
                });
                document['querySelectorAll']('.shareToPinterest')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'https://pinterest.com/pin/create/button/?url=' + _0x7043xf9)
                });
                document['querySelectorAll']('.shareToWhatsApp')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'whatsapp://send?text=' + _0x7043xf9)
                });
                document['querySelectorAll']('.shareToMail')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'mailto:?body=' + _0x7043xf9)
                });
                document['querySelectorAll']('.shareToLinkedIn')['forEach']((_0x7043xfb) => {
                    return _0x7043xfb['setAttribute']('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x7043xf9 + '&title=' + _0x7043xfa + '&summary=&source=')
                })
            }
        }
        var _0x7043xfc = document['querySelectorAll']('.contact-form');
        if (_0x7043xfc['length']) {
            var _0x7043xfd = document['getElementById']('contactForm');
            _0x7043xfd['onsubmit'] = function(_0x7043xb) {
                _0x7043xb['preventDefault']();
                var _0x7043xfe = document['getElementById']('contactNameField');
                var _0x7043xff = document['getElementById']('contactEmailField');
                var _0x7043x100 = document['getElementById']('contactMessageTextarea');
                var _0x7043x101 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (_0x7043xfe['value'] === '') {
                    _0x7043xfd['setAttribute']('data-form', 'invalid');
                    _0x7043xfe['classList']['add']('border-red-dark');
                    document['getElementById']('validator-name')['classList']['remove']('disabled')
                } else {
                    _0x7043xfd['setAttribute']('data-form', 'valid');
                    document['getElementById']('validator-name')['classList']['add']('disabled');
                    _0x7043xfe['classList']['remove']('border-red-dark')
                };
                if (_0x7043xff['value'] === '') {
                    _0x7043xfd['setAttribute']('data-form', 'invalid');
                    _0x7043xff['classList']['add']('border-red-dark');
                    document['getElementById']('validator-mail1')['classList']['remove']('disabled')
                } else {
                    document['getElementById']('validator-mail1')['classList']['add']('disabled');
                    if (!_0x7043x101['test'](_0x7043xff['value'])) {
                        _0x7043xfd['setAttribute']('data-form', 'invalid');
                        _0x7043xff['classList']['add']('border-red-dark');
                        document['getElementById']('validator-mail2')['classList']['remove']('disabled')
                    } else {
                        _0x7043xfd['setAttribute']('data-form', 'valid');
                        document['getElementById']('validator-mail2')['classList']['add']('disabled');
                        _0x7043xff['classList']['remove']('border-red-dark')
                    }
                };
                if (_0x7043x100['value'] === '') {
                    _0x7043xfd['setAttribute']('data-form', 'invalid');
                    _0x7043x100['classList']['add']('border-red-dark');
                    document['getElementById']('validator-text')['classList']['remove']('disabled')
                } else {
                    _0x7043xfd['setAttribute']('data-form', 'valid');
                    document['getElementById']('validator-text')['classList']['add']('disabled');
                    _0x7043x100['classList']['remove']('border-red-dark')
                };
                if (_0x7043xfd['getAttribute']('data-form') === 'valid') {
                    document['querySelectorAll']('.form-sent')[0]['classList']['remove']('disabled');
                    document['querySelectorAll']('.contact-form')[0]['classList']['add']('disabled');
                    var _0x7043x102 = {};
                    for (let _0x7043xa = 0, _0x7043x103 = _0x7043xfd['length']; _0x7043xa < _0x7043x103; ++_0x7043xa) {
                        let _0x7043x104 = _0x7043xfd[_0x7043xa];
                        if (_0x7043x104['name']) {
                            _0x7043x102[_0x7043x104['name']] = _0x7043x104['value']
                        }
                    };
                    var _0x7043x105 = new XMLHttpRequest();
                    _0x7043x105['open'](_0x7043xfd['method'], _0x7043xfd['action'], true);
                    _0x7043x105['setRequestHeader']('Accept', 'application/json; charset=utf-8');
                    _0x7043x105['setRequestHeader']('Content-Type', 'application/json; charset=UTF-8');
                    _0x7043x105['send'](JSON['stringify'](_0x7043x102));
                    _0x7043x105['onloadend'] = function(_0x7043x106) {
                        if (_0x7043x106['target']['status'] === 200) {
                            console['log']('Form Submitted')
                        }
                    }
                }
            }
        };
        var _0x7043x107 = document['querySelectorAll']('[data-bs-toggle=\"collapse\"]:not(.no-effect)');
        if (_0x7043x107['length']) {
            _0x7043x107['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    if (_0x7043xc['querySelectorAll']('i')['length']) {
                        _0x7043xc['querySelector']('i')['classList']['toggle']('fa-rotate-180')
                    }
                })
            })
        };
        var _0x7043x108 = document['querySelectorAll']('.tab-controls a');
        if (_0x7043x108['length']) {
            _0x7043x108['forEach'](function(_0x7043xb) {
                if (_0x7043xb['hasAttribute']('data-active')) {
                    var _0x7043x109 = _0x7043xb['parentNode']['getAttribute']('data-highlight');
                    _0x7043xb['classList']['add'](_0x7043x109);
                    _0x7043xb['classList']['add']('no-click')
                }
            });
            _0x7043x108['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                    var _0x7043x109 = _0x7043xc['parentNode']['getAttribute']('data-highlight');
                    var _0x7043x10a = _0x7043xc['parentNode']['querySelectorAll']('a');
                    _0x7043x10a['forEach'](function(_0x7043xb) {
                        _0x7043xb['classList']['remove'](_0x7043x109);
                        _0x7043xb['classList']['remove']('no-click')
                    });
                    _0x7043xc['classList']['add'](_0x7043x109);
                    _0x7043xc['classList']['add']('no-click')
                })
            })
        };

        function _0x7043x39(_0x7043x10b, _0x7043x32, _0x7043x41) {
            setTimeout(function() {
                if (_0x7043x32 === 'show') {
                    return document['getElementById'](_0x7043x10b)['classList']['add']('menu-active'), document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                } else {
                    return document['getElementById'](_0x7043x10b)['classList']['remove']('menu-active'), document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                }
            }, _0x7043x41)
        }
        var _0x7043x10c = document['querySelectorAll']('[data-auto-activate]');
        if (_0x7043x10c['length']) {
            var _0x7043x10d = _0x7043x10c[0]['getAttribute']('data-auto-activate');
            var _0x7043x10e = _0x7043x10d * 1000;
            setTimeout(function() {
                _0x7043x10c[0]['classList']['add']('menu-active');
                _0x7043xd[0]['classList']['add']('menu-active')
            }, _0x7043x10e)
        };
        var _0x7043x10f = document['getElementById']('copyright-year');
        if (_0x7043x10f) {
            var _0x7043x110 = new Date();
            const _0x7043x111 = _0x7043x110['getFullYear']();
            _0x7043x10f['textContent'] = _0x7043x111
        };
        var _0x7043x112 = document['querySelectorAll']('.check-age');
        if (_0x7043x112['length']) {
            _0x7043x112[0]['addEventListener']('click', function() {
                var _0x7043x113 = document['querySelectorAll']('#date-birth-day')[0]['value'];
                var _0x7043x114 = document['querySelectorAll']('#date-birth-month')[0]['value'];
                var _0x7043x115 = document['querySelectorAll']('#date-birth-year')[0]['value'];
                var _0x7043x116 = 18;
                var _0x7043x117 = new Date();
                _0x7043x117['setFullYear'](_0x7043x115, _0x7043x114 - 1, _0x7043x113);
                var _0x7043x118 = new Date();
                var _0x7043x119 = new Date();
                _0x7043x119['setFullYear'](_0x7043x117['getFullYear']() + _0x7043x116, _0x7043x114 - 1, _0x7043x113);
                var _0x7043x11a = document['querySelectorAll']('#menu-age');
                var _0x7043x11b = document['querySelectorAll']('#menu-age-fail');
                var _0x7043x11c = document['querySelectorAll']('#menu-age-okay');
                console['log'](_0x7043x118);
                console['log'](_0x7043x119);
                console['log'](_0x7043x114);
                if ((_0x7043x118 - _0x7043x119) > 0) {
                    console['log']('above 18');
                    _0x7043x11a[0]['classList']['remove']('menu-active');
                    _0x7043x11c[0]['classList']['add']('menu-active')
                } else {
                    _0x7043x11a[0]['classList']['remove']('menu-active');
                    _0x7043x11b[0]['classList']['add']('menu-active')
                };
                return true
            })
        };
        var _0x7043x11d = document['querySelectorAll']('[data-menu-load]');
        _0x7043x11d['forEach'](function(_0x7043xb) {
            var _0x7043x11e = _0x7043xb['getAttribute']('data-menu-load');
            fetch(_0x7043x11e)['then']((_0x7043x102) => {
                return _0x7043x102['text']()
            })['then']((_0x7043x11f) => {
                return _0x7043xb['innerHTML'] = _0x7043x11f
            })['then']((_0x7043x102) => {
                setTimeout(function() {
                    if (_0x7043x11d[_0x7043x11d['length'] - 1] === _0x7043xb) {
                        _0x7043x32();
                        _0x7043x5e();
                        _0x7043x43();
                        _0x7043xf7();
                        _0x7043x55();
                        _0x7043x53();
                        _0x7043x4a();
                        _0x7043x47()
                    }
                }, 500)
            })
        });
        let _0x7043x120 = {
            Android: function() {
                return navigator['userAgent']['match'](/Android/i)
            },
            iOS: function() {
                return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
            },
            any: function() {
                return (_0x7043x120.Android() || _0x7043x120['iOS']())
            }
        };
        const _0x7043x121 = document['getElementsByClassName']('show-android');
        const _0x7043x122 = document['getElementsByClassName']('show-ios');
        const _0x7043x123 = document['getElementsByClassName']('show-no-device');
        if (!_0x7043x120['any']()) {
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x122['length']; _0x7043xa++) {
                _0x7043x122[_0x7043xa]['classList']['add']('disabled')
            };
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x121['length']; _0x7043xa++) {
                _0x7043x121[_0x7043xa]['classList']['add']('disabled')
            }
        };
        if (_0x7043x120['iOS']()) {
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x123['length']; _0x7043xa++) {
                _0x7043x123[_0x7043xa]['classList']['add']('disabled')
            };
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x121['length']; _0x7043xa++) {
                _0x7043x121[_0x7043xa]['classList']['add']('disabled')
            }
        };
        if (_0x7043x120.Android()) {
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x122['length']; _0x7043xa++) {
                _0x7043x122[_0x7043xa]['classList']['add']('disabled')
            };
            for (let _0x7043xa = 0; _0x7043xa < _0x7043x123['length']; _0x7043xa++) {
                _0x7043x123[_0x7043xa]['classList']['add']('disabled')
            }
        };
        var _0x7043x124 = document['querySelectorAll']('.offline-message');
        if (!_0x7043x124['length']) {
            const _0x7043x125 = document['createElement']('p');
            const _0x7043x126 = document['createElement']('p');
            _0x7043x125['className'] = 'offline-message bg-red-dark color-white';
            _0x7043x125['textContent'] = 'No internet connection detected';
            _0x7043x126['className'] = 'online-message bg-green-dark color-white';
            _0x7043x126['textContent'] = 'You are back online';
            document['getElementsByTagName']('body')[0]['appendChild'](_0x7043x125);
            document['getElementsByTagName']('body')[0]['appendChild'](_0x7043x126)
        };

        function _0x7043x127() {
            var _0x7043x128 = document['querySelectorAll']('a');
            _0x7043x128['forEach'](function(_0x7043xb) {
                var _0x7043x129 = _0x7043xb['getAttribute']('href');
                if (_0x7043x129['match'](/.html/)) {
                    _0x7043xb['classList']['add']('show-offline');
                    _0x7043xb['setAttribute']('data-link', _0x7043x129);
                    _0x7043xb['setAttribute']('href', '#')
                }
            });
            var _0x7043x12a = document['querySelectorAll']('.show-offline');
            _0x7043x12a['forEach']((_0x7043xc) => {
                return _0x7043xc['addEventListener']('click', (_0x7043x6d) => {
                    document['getElementsByClassName']('offline-message')[0]['classList']['add']('offline-message-active');
                    setTimeout(function() {
                        document['getElementsByClassName']('offline-message')[0]['classList']['remove']('offline-message-active')
                    }, 1500)
                })
            })
        }

        function _0x7043x12b() {
            var _0x7043x12c = document['querySelectorAll']('[data-link]');
            _0x7043x12c['forEach'](function(_0x7043xb) {
                var _0x7043x129 = _0x7043xb['getAttribute']('data-link');
                if (_0x7043x129['match'](/.html/)) {
                    _0x7043xb['setAttribute']('href', _0x7043x129);
                    _0x7043xb['removeAttribute']('data-link', '')
                }
            })
        }
        var _0x7043x12d = document['getElementsByClassName']('offline-message')[0];
        var _0x7043x12e = document['getElementsByClassName']('online-message')[0];

        function _0x7043x12f() {
            _0x7043x12b();
            _0x7043x12e['classList']['add']('online-message-active');
            setTimeout(function() {
                _0x7043x12e['classList']['remove']('online-message-active')
            }, 2000);
            console['info']('Connection: Online')
        }

        function _0x7043x130() {
            _0x7043x127();
            _0x7043x12d['classList']['add']('offline-message-active');
            setTimeout(function() {
                _0x7043x12d['classList']['remove']('offline-message-active')
            }, 2000);
            console['info']('Connection: Offline')
        }
        var _0x7043x131 = document['querySelectorAll']('.simulate-offline');
        var _0x7043x132 = document['querySelectorAll']('.simulate-online');
        if (_0x7043x131['length']) {
            _0x7043x131[0]['addEventListener']('click', function() {
                _0x7043x130()
            });
            _0x7043x132[0]['addEventListener']('click', function() {
                _0x7043x12f()
            })
        };

        function _0x7043x133(_0x7043x6d) {
            var _0x7043x134 = navigator['onLine'] ? 'online' : 'offline';
            _0x7043x12f()
        }

        function _0x7043x135(_0x7043x6d) {
            _0x7043x130()
        }
        window['addEventListener']('online', _0x7043x133);
        window['addEventListener']('offline', _0x7043x135);
        const _0x7043x136 = document['querySelectorAll']('.simulate-iphone-badge');
        _0x7043x136['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-ios');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-android')
            })
        });
        const _0x7043x137 = document['querySelectorAll']('.simulate-android-badge');
        _0x7043x137['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['add']('add-to-home-visible', 'add-to-home-android');
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-ios')
            })
        });
        const _0x7043x138 = document['querySelectorAll']('.add-to-home');
        _0x7043x138['forEach']((_0x7043xc) => {
            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                document['getElementsByClassName']('add-to-home')[0]['classList']['remove']('add-to-home-visible')
            })
        });
        if (_0x7043x2 === true) {
            var _0x7043x139 = document['getElementsByTagName']('html')[0];
            if (!_0x7043x139['classList']['contains']('isPWA')) {
                if ('serviceWorker' in navigator) {
                    window['addEventListener']('load', function() {
                        navigator['serviceWorker']['register'](_0x7043x8, {
                            scope: _0x7043x7
                        })
                    })
                };
                var _0x7043x13a = _0x7043x5 * 24;
                var _0x7043xbb = Date['now']();
                var _0x7043x13b = localStorage['getItem'](_0x7043x4 + '-PWA-Timeout-Value');
                if (_0x7043x13b == null) {
                    localStorage['setItem'](_0x7043x4 + '-PWA-Timeout-Value', _0x7043xbb)
                } else {
                    if (_0x7043xbb - _0x7043x13b > _0x7043x13a * 60 * 60 * 1000) {
                        localStorage['removeItem'](_0x7043x4 + '-PWA-Prompt');
                        localStorage['setItem'](_0x7043x4 + '-PWA-Timeout-Value', _0x7043xbb)
                    }
                };
                const _0x7043x13c = document['querySelectorAll']('.pwa-dismiss');
                _0x7043x13c['forEach']((_0x7043xc) => {
                    return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                        const _0x7043x13d = document['querySelectorAll']('#menu-install-pwa-android, #menu-install-pwa-ios');
                        for (let _0x7043xa = 0; _0x7043xa < _0x7043x13d['length']; _0x7043xa++) {
                            _0x7043x13d[_0x7043xa]['classList']['remove']('menu-active')
                        };
                        localStorage['setItem'](_0x7043x4 + '-PWA-Timeout-Value', _0x7043xbb);
                        localStorage['setItem'](_0x7043x4 + '-PWA-Prompt', 'install-rejected');
                        console['log']('PWA Install Rejected. Will Show Again in ' + (_0x7043x5) + ' Day')
                    })
                });
                const _0x7043x13d = document['querySelectorAll']('#menu-install-pwa-android, #menu-install-pwa-ios');
                if (_0x7043x13d['length']) {
                    if (_0x7043x120.Android()) {
                        if (localStorage['getItem'](_0x7043x4 + '-PWA-Prompt') != 'install-rejected') {
                            function _0x7043x13e() {
                                setTimeout(function() {
                                    if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                        console['log']('Triggering PWA Window for Android');
                                        document['getElementById']('menu-install-pwa-android')['classList']['add']('menu-active');
                                        document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                                    }
                                }, 3500)
                            }
                            var _0x7043x13f;
                            window['addEventListener']('beforeinstallprompt', (_0x7043xb) => {
                                _0x7043xb['preventDefault']();
                                _0x7043x13f = _0x7043xb;
                                _0x7043x13e()
                            })
                        };
                        const _0x7043x140 = document['querySelectorAll']('.pwa-install');
                        _0x7043x140['forEach']((_0x7043xc) => {
                            return _0x7043xc['addEventListener']('click', (_0x7043xb) => {
                                _0x7043x13f['prompt']();
                                _0x7043x13f['userChoice']['then']((_0x7043x141) => {
                                    if (_0x7043x141['outcome'] === 'accepted') {
                                        console['log']('Added')
                                    } else {
                                        localStorage['setItem'](_0x7043x4 + '-PWA-Timeout-Value', _0x7043xbb);
                                        localStorage['setItem'](_0x7043x4 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function() {
                                            if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                                document['getElementById']('menu-install-pwa-android')['classList']['remove']('menu-active');
                                                document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                                            }
                                        }, 50)
                                    };
                                    _0x7043x13f = null
                                })
                            })
                        });
                        window['addEventListener']('appinstalled', (_0x7043x142) => {
                            document['getElementById']('menu-install-pwa-android')['classList']['remove']('menu-active');
                            document['querySelectorAll']('.menu-hider')[0]['classList']['remove']('menu-active')
                        })
                    };
                    if (_0x7043x120['iOS']()) {
                        if (localStorage['getItem'](_0x7043x4 + '-PWA-Prompt') != 'install-rejected') {
                            setTimeout(function() {
                                if (!window['matchMedia']('(display-mode: fullscreen)')['matches']) {
                                    console['log']('Triggering PWA Window for iOS');
                                    document['getElementById']('menu-install-pwa-ios')['classList']['add']('menu-active');
                                    document['querySelectorAll']('.menu-hider')[0]['classList']['add']('menu-active')
                                }
                            }, 3500)
                        }
                    }
                }
            };
            _0x7043x139['setAttribute']('class', 'isPWA')
        };
        if (_0x7043x6 === true) {
            caches['delete']('workbox-runtime')['then'](function() {});
            sessionStorage['clear']();
            caches['keys']()['then']((_0x7043x143) => {
                _0x7043x143['forEach']((_0x7043x144) => {
                    caches['delete'](_0x7043x144)
                })
            })
        };
        var _0x7043x145 = new LazyLoad();
        var _0x7043x146, _0x7043x147, _0x7043x148, _0x7043x149;
        var _0x7043x14a = 'plugins/';
        let _0x7043x14b = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-charts.js',
            trigger: '.chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-wallet.js',
            trigger: '.wallet-chart'
        }, {
            id: 'chart',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-dashboard.js',
            trigger: '.dashboard-chart'
        }, {
            id: 'graph',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'gallery',
            plug: 'glightbox/glightbox.js',
            call: 'glightbox/glightbox-call.js',
            style: 'glightbox/glightbox.css',
            trigger: '[data-gallery]'
        }, {
            id: 'gallery-views',
            plug: 'galleryViews/gallery-views.js',
            trigger: '.gallery-view-controls'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }, {
            id: 'embedly',
            plug: 'embedly/embedly.js',
            trigger: '.embedly-card'
        }];
        for (let _0x7043xa = 0; _0x7043xa < _0x7043x14b['length']; _0x7043xa++) {
            if (document['querySelectorAll']('.' + _0x7043x14b[_0x7043xa]['id'] + '-c')['length']) {
                document['querySelectorAll']('.' + _0x7043x14b[_0x7043xa]['id'] + '-c')[0]['remove']()
            };
            var _0x7043x14c = document['querySelectorAll'](_0x7043x14b[_0x7043xa]['trigger']);
            if (_0x7043x14c['length']) {
                var _0x7043x14d = document['getElementsByTagName']('script')[1],
                    _0x7043x14e = document['createElement']('script');
                _0x7043x14e['type'] = 'text/javascript';
                _0x7043x14e['className'] = _0x7043x14b[_0x7043xa]['id'] + '-p';
                _0x7043x14e['src'] = _0x7043x14a + _0x7043x14b[_0x7043xa]['plug'];
                _0x7043x14e['addEventListener']('load', function() {
                    if (_0x7043x14b[_0x7043xa]['call'] !== undefined) {
                        var _0x7043x14f = document['getElementsByTagName']('script')[2],
                            _0x7043x150 = document['createElement']('script');
                        _0x7043x150['type'] = 'text/javascript';
                        _0x7043x150['className'] = _0x7043x14b[_0x7043xa]['id'] + '-c';
                        _0x7043x150['src'] = _0x7043x14a + _0x7043x14b[_0x7043xa]['call'];
                        _0x7043x14f['parentNode']['insertBefore'](_0x7043x150, _0x7043x14f)
                    }
                });
                if (!document['querySelectorAll']('.' + _0x7043x14b[_0x7043xa]['id'] + '-p')['length']) {
                    _0x7043x14d['parentNode']['insertBefore'](_0x7043x14e, _0x7043x14d)
                } else {
                    setTimeout(function() {
                        var _0x7043x14d = document['getElementsByTagName']('script')[1],
                            _0x7043x14e = document['createElement']('script');
                        _0x7043x14e['type'] = 'text/javascript';
                        _0x7043x14e['className'] = _0x7043x14b[_0x7043xa]['id'] + '-c';
                        _0x7043x14e['src'] = _0x7043x14a + _0x7043x14b[_0x7043xa]['call'];
                        _0x7043x14d['parentNode']['insertBefore'](_0x7043x14e, _0x7043x14d)
                    }, 50)
                };
                if (_0x7043x14b[_0x7043xa]['style'] !== undefined) {
                    if (!document['querySelectorAll']('.' + _0x7043x14b[_0x7043xa]['id'] + '-s')['length']) {
                        var _0x7043x151 = document['createElement']('link');
                        _0x7043x151['className'] = _0x7043x14b[_0x7043xa]['id'] + '-s';
                        _0x7043x151['rel'] = 'stylesheet';
                        _0x7043x151['type'] = 'text/css';
                        _0x7043x151['href'] = _0x7043x14a + _0x7043x14b[_0x7043xa]['style'];
                        document['getElementsByTagName']('head')[0]['appendChild'](_0x7043x151)
                    }
                }
            }
        }
    }
    if ('scrollRestoration' in window['history']) {
        window['history']['scrollRestoration'] = 'manual'
    };
    if (_0x7043x3 === true) {
        if (window['location']['protocol'] !== 'file:') {
            const _0x7043x152 = {
                containers: ['#page'],
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^=\"https\"]):not([href^=\"http\"]):not([data-gallery])'
            };
            const _0x7043x153 = new Swup(_0x7043x152);
            document['addEventListener']('swup:pageView', (_0x7043xb) => {
                _0x7043x9()
            })
        }
    };
    _0x7043x9()
})
// console.clear();


// console.log(`%c
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
// .                                                                                 .
// .                                                                                 .
// .                                                                                 .
// .                      uuuuuuu                                                    .
// .                  uu$$$$$$$$$$$uu                                                .
// .               uu$$$$$$$$$$$$$$$$$uu                                             .
// .              u$$$$$$$$$$$$$$$$$$$$$u                                            .
// .             u$$$$$$$$$$$$$$$$$$$$$$$u                                           .
// .            u$$$$$$$$$$$$$$$$$$$$$$$$$u                   K E E P  C A L M       .
// .            u$$$$$$$$$$$$$$$$$$$$$$$$$u                                          .
// .            u$$$$$$"   "$$$"   "$$$$$$u                  # S T A Y  H O M E      .
// .            "$$$$"      u$u       $$$$"                                          .
// .             $$$u       u$u       u$$$                   # S T A Y  S A F E      .
// .             $$$u      u$$$u      u$$$                                           .
// .              "$$$$uu$$$   $$$uu$$$$"                                            .
// .               "$$$$$$$"   "$$$$$$$"                                             .
// .                 u$$$$$$$u$$$$$$$u                          N E E D  A P -       .
// .                  u$"$"$"$"$"$"$u                                                .
// .       uuu        $$u$ $ $ $ $u$$       uuu                                      .
// .      u$$$$        $$$$$u$u$u$$$       u$$$$                                     .
// .       $$$$$uu      "$$$$$$$$$"     uu$$$$$$                                     .
// .     u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$                                   .
// .     $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"                                   .
// .      """      ""$$$$$$$$$$$uu ""$"""                                            .
// .                uuuu ""$$$$$$$$$$uuu                                             .
// .       u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$                                    .
// .       $$$$$$$$$$""""           ""$$$$$$$$$$$"                NEED AP            .
// .        "$$$$$"                      ""$$$$""       knvdurgaprasad610@gmail.com  .
// .          $$$"                         $$$$"                                     .
// .                                                                                 .
// . This site is only for our Community. So, don't try to check the vulnerabilities :).
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .`,"color:#00bfff; background:#000000; font-family: monospace");
     