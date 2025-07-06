'use client'
import { Heading2 } from '@/components/atoms/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WeddingGift() {
  const [copied, setCopied] = useState('')

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const bankAccounts = [
    {
      bank: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Nafa',
      type: 'bride'
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Ali',
      type: 'groom'
    }
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-[#F8F5F2]" />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Clean Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-[#C49A6C] w-32" />
            <span className="mx-6 text-[#C49A6C] font-cormorant text-sm tracking-[0.3em] uppercase">Wedding Gift</span>
            <div className="h-px bg-[#C49A6C] w-32" />
          </div>
          
          <Heading2 className="font-lucy-rose text-4xl md:text-5xl lg:text-6xl text-[#5B4B49] mb-6">
            Wedding Gift
          </Heading2>
          
          <p className="font-cormorant text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberikan tanda kasih merupakan ungkapan terbaik Anda, dapat diberikan melalui:
          </p>
        </motion.div>
        
        {/* Digital Payment Section - Simplified */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#C49A6C] rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💳</span>
              </div>
              <h3 className="font-lucy-rose text-3xl lg:text-4xl text-[#5B4B49] mb-4">Digital Payment</h3>
              <p className="font-cormorant text-lg text-gray-600">Transfer ke rekening berikut</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bankAccounts.map((account, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-gray-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-8">
                    <h4 className="font-lucy-rose text-2xl font-normal text-[#5B4B49] mb-2">{account.bank}</h4>
                    <div className="w-12 h-1 bg-[#C49A6C] rounded-full mx-auto" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="font-poppins text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Nomor Rekening</p>
                      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-gray-200">
                        <span className="font-mono text-lg font-bold text-[#5B4B49]">{account.accountNumber}</span>
                        <button
                          onClick={() => copyToClipboard(account.accountNumber, account.type)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            copied === account.type 
                              ? 'bg-green-500 text-white' 
                              : 'bg-[#C49A6C] text-white hover:bg-[#B8885F]'
                          }`}
                        >
                          {copied === account.type ? '✓ Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-poppins text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Atas Nama</p>
                      <div className="bg-white px-6 py-4 rounded-xl border border-gray-200">
                        <p className="font-cormorant text-xl font-bold text-[#5B4B49] text-center">{account.accountName}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Physical Gift Section - Simplified */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#C49A6C] rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📦</span>
              </div>
              <h3 className="font-lucy-rose text-3xl lg:text-4xl text-[#5B4B49] mb-4">Physical Gift</h3>
              <p className="font-cormorant text-lg text-gray-600">Alamat pengiriman kado</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="font-poppins text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Nama</p>
                  <p className="font-cormorant text-xl font-bold text-[#5B4B49]">Nafa & Ali</p>
                </div>
                
                <div>
                  <p className="font-poppins text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Alamat</p>
                  <p className="font-cormorant text-lg font-semibold text-[#5B4B49]">Jl. [Alamat Lengkap], [Kota], [Kode Pos]</p>
                </div>
                
                <div>
                  <p className="font-poppins text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">No. Telepon</p>
                  <p className="font-cormorant text-lg font-semibold text-[#5B4B49]">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <p className="font-cormorant text-xl text-[#5B4B49] leading-relaxed italic">
              "Terima kasih atas doa dan dukungan Anda untuk pernikahan kami"
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-12 h-1 bg-[#C49A6C] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}