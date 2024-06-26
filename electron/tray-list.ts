import { nativeImage } from 'electron'
import * as path from 'path'

// 创建原生图像
export function createNativeImage(val: string) {
  return nativeImage.createFromPath(path.join(__dirname, val)).resize({ height: 24 })
}

export const trays = {
  runcat: [
    createNativeImage('../public/icons/runcat/0.png'),
    createNativeImage('../public/icons/runcat/1.png'),
    createNativeImage('../public/icons/runcat/2.png'),
    createNativeImage('../public/icons/runcat/3.png'),
    createNativeImage('../public/icons/runcat/4.png'),
  ],
  mario: [
    createNativeImage('../public/icons/mario/0.png'),
    createNativeImage('../public/icons/mario/1.png'),
    createNativeImage('../public/icons/mario/2.png'),
  ],
  mona: [
    createNativeImage('../public/icons/mona/0.png'),
    createNativeImage('../public/icons/mona/1.png'),
    createNativeImage('../public/icons/mona/2.png'),
    createNativeImage('../public/icons/mona/3.png'),
    createNativeImage('../public/icons/mona/4.png'),
    createNativeImage('../public/icons/mona/5.png'),
    createNativeImage('../public/icons/mona/6.png'),
  ],
  partyBlobCat: [
    createNativeImage('../public/icons/partyBlobCat/0.png'),
    createNativeImage('../public/icons/partyBlobCat/1.png'),
    createNativeImage('../public/icons/partyBlobCat/2.png'),
    createNativeImage('../public/icons/partyBlobCat/3.png'),
    createNativeImage('../public/icons/partyBlobCat/4.png'),
    createNativeImage('../public/icons/partyBlobCat/5.png'),
    createNativeImage('../public/icons/partyBlobCat/6.png'),
    createNativeImage('../public/icons/partyBlobCat/7.png'),
    createNativeImage('../public/icons/partyBlobCat/8.png'),
    createNativeImage('../public/icons/partyBlobCat/9.png'),
  ],
  points: [
    createNativeImage('../public/icons/points/1.png'),
    createNativeImage('../public/icons/points/2.png'),
    createNativeImage('../public/icons/points/3.png'),
    createNativeImage('../public/icons/points/4.png'),
    createNativeImage('../public/icons/points/5.png'),
    createNativeImage('../public/icons/points/6.png'),
    createNativeImage('../public/icons/points/7.png'),
    createNativeImage('../public/icons/points/8.png'),
  ],
  runcatX: [
    createNativeImage('../public/icons/runcatX/0.png'),
    createNativeImage('../public/icons/runcatX/1.png'),
    createNativeImage('../public/icons/runcatX/2.png'),
    createNativeImage('../public/icons/runcatX/3.png'),
    createNativeImage('../public/icons/runcatX/4.png'),
  ],
  rap: [
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-0.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-1.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-2.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-3.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-4.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-5.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-6.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-7.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-8.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-9.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-10.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-11.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-12.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-13.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-14.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-15.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-16.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-17.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-18.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-19.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-20.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-21.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-22.png'),
    createNativeImage('../public/icons/sing_jump_rap/cai-xukun-23.png'),
  ]
}
