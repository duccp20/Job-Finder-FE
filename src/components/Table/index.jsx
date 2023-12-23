import React from "react";

const Table = () => {
  const sampleData = [
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
    {
      position: "Business Analyst",
      postTotal: "52",
      candidate: "152",
    },
  ];
  return (
    <div className="max-h-[275px] flex-1 overflow-y-scroll pl-[12px]">
      <table className="w-full">
        <thead>
          <tr className="text-[12px] font-[600]">
            <th className="p-1">STT</th>
            <th className="p-1 text-left">Vị trí làm việc</th>
            <th className="p-1 text-left">Bài đăng</th>
            <th className="p-1 text-left">Ứng viên</th>
          </tr>
        </thead>
        <tbody className="text-[12px] font-[400]">
          {sampleData.map((item, index) => (
            <tr key={index} className="hover:bg-[#F3BD5033]">
              <td className="p-[10px]">{index + 1}</td>
              <td className="flex items-center gap-[10px] p-[10px] ">
                {item.position}
                {index === 0 && (
                  <>
                    <img
                      src="/public/images/1st.png"
                      className="h-[15px] w-[13px] rounded-full"
                    />
                  </>
                )}
                {index === 1 && (
                  <>
                    <img
                      src="/public/images/2nd.png"
                      className="h-[15px] w-[13px] rounded-full"
                    />
                  </>
                )}
                {index === 2 && (
                  <>
                    <img
                      src="/public/images/3rd.png"
                      className="h-[15px] w-[13px] rounded-full"
                    />
                  </>
                )}
              </td>
              <td className="p-[10px] text-center">{item.postTotal}</td>
              <td className="p-[10px] text-center">{item.candidate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
